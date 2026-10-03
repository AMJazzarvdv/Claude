var Vl="160";var td=0,Sc=1,ed=2;var iu=1,Wl=2,Ji=3,Sn=0,Ge=1,ge=2;var zi=0,yn=1,Di=2,Ec=3,Tc=4,id=5,Hn=100,nd=101,sd=102,Ac=103,Rc=104,rd=200,od=201,ad=202,ld=203,Ka=204,ja=205,cd=206,hd=207,ud=208,dd=209,fd=210,pd=211,md=212,gd=213,xd=214,vd=0,_d=1,yd=2,eo=3,Md=4,bd=5,wd=6,Sd=7,nu=0,Ed=1,Td=2,Mn=0,Xl=1,ql=2,Yl=3,cr=4,Ad=5,Zl=6;var su=300,Es=301,Ts=302,Qa=303,tl=304,Bo=306,er=1e3,Ii=1001,el=1002,Ve=1003,Cc=1004;var pa=1005;var ui=1006,Rd=1007;var Yn=1008;var bn=1009,Cd=1010,Pd=1011,$l=1012,ru=1013,vn=1014,_n=1015,vi=1016,ou=1017,au=1018,Wn=1020,Ld=1021,xi=1023,Id=1024,Dd=1025,Xn=1026,As=1027,Ud=1028,lu=1029,Nd=1030,cu=1031,hu=1033,ma=33776,ga=33777,xa=33778,va=33779,Pc=35840,Lc=35841,Ic=35842,Dc=35843,uu=36196,Uc=37492,Nc=37496,Fc=37808,kc=37809,Bc=37810,Oc=37811,zc=37812,Hc=37813,Gc=37814,Vc=37815,Wc=37816,Xc=37817,qc=37818,Yc=37819,Zc=37820,$c=37821,_a=36492,Jc=36494,Kc=36495,Fd=36283,jc=36284,Qc=36285,th=36286;var io=2300,no=2301,ya=2302,eh=2400,ih=2401,nh=2402;var du=3e3,qn=3001,kd=3200,Bd=3201,fu=0,Od=1,Si="",Pe="srgb",tn="srgb-linear",Jl="display-p3",Oo="display-p3-linear",so="linear",ce="srgb",ro="rec709",oo="p3";var ts=7680;var sh=519,zd=512,Hd=513,Gd=514,pu=515,Vd=516,Wd=517,Xd=518,qd=519,il=35044,hr=35048;var rh="300 es",nl=1035,Qi=2e3,ao=2001,En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ma=Math.PI/180,sl=180/Math.PI;function wn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[s&255]+Je[s>>8&255]+Je[s>>16&255]+Je[s>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function Yd(s,t){return(s%t+t)%t}function ba(s,t,e){return(1-e)*s+e*t}function oh(s){return(s&s-1)===0&&s!==0}function rl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ji(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var j=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],_=n[1],v=n[4],M=n[7],R=n[2],T=n[5],E=n[8];return r[0]=a*x+o*_+l*R,r[3]=a*m+o*v+l*T,r[6]=a*p+o*M+l*E,r[1]=c*x+h*_+u*R,r[4]=c*m+h*v+u*T,r[7]=c*p+h*M+u*E,r[2]=d*x+f*_+g*R,r[5]=d*m+f*v+g*T,r[8]=d*p+f*M+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wa=new Wt;function mu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zd(){let s=lo("canvas");return s.style.display="block",s}var ah={};function Ks(s){s in ah||(ah[s]=!0,console.warn(s))}var lh=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ch=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[tn]:{transfer:so,primaries:ro,toReference:s=>s,fromReference:s=>s},[Pe]:{transfer:ce,primaries:ro,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Oo]:{transfer:so,primaries:oo,toReference:s=>s.applyMatrix3(ch),fromReference:s=>s.applyMatrix3(lh)},[Jl]:{transfer:ce,primaries:oo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ch),fromReference:s=>s.applyMatrix3(lh).convertLinearToSRGB()}},$d=new Set([tn,Oo]),te={enabled:!0,_workingColorSpace:tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!$d.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=Er[t].toReference,n=Er[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Er[s].primaries},getTransfer:function(s){return s===Si?so:Er[s].transfer}};function ws(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Sa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var es,co=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=lo("canvas")),es.width=t.width,es.height=t.height;let i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=ws(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ws(e[i]/255)*255):e[i]=ws(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jd=0,ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=wn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Ea(n[a].image)):r.push(Ea(n[a]))}else r=Ea(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ea(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?co.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kd=0,_i=class s extends En{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Ii,n=Ii,r=ui,a=Yn,o=xi,l=bn,c=s.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=wn(),this.name="",this.source=new ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qn?Pe:Si),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pe?qn:du}set encoding(t){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qn?Pe:Si}};_i.DEFAULT_IMAGE=null;_i.DEFAULT_MAPPING=su;_i.DEFAULT_ANISOTROPY=1;var be=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,M=(f+1)/2,R=(p+1)/2,T=(h+d)/4,E=(u+x)/4,P=(g+m)/4;return v>M&&v>R?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=T/i,r=E/i):M>R?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=T/n,r=P/n):R<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(R),i=E/r,n=P/r),this.set(i,n,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ol=class extends En{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qn?Pe:Si),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _i(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends ol{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},uo=class extends _i{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var al=class extends _i{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qe=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),T=Math.atan2(R,p*_);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let M=o*_;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+x*M,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ta=new C,hh=new Qe,en=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ci):Ci.fromBufferAttribute(r,a),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Ar.subVectors(this.max,Hs),is.subVectors(t.a,Hs),ns.subVectors(t.b,Hs),ss.subVectors(t.c,Hs),fn.subVectors(ns,is),pn.subVectors(ss,ns),Fn.subVectors(is,ss);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Fn.z,Fn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Fn.z,0,-Fn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Fn.y,Fn.x,0];return!Aa(e,is,ns,ss,Ar)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,is,ns,ss,Ar))?!1:(Rr.crossVectors(fn,pn),e=[Rr.x,Rr.y,Rr.z],Aa(e,is,ns,ss,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Xi=[new C,new C,new C,new C,new C,new C,new C,new C],Ci=new C,Tr=new en,is=new C,ns=new C,ss=new C,fn=new C,pn=new C,Fn=new C,Hs=new C,Ar=new C,Rr=new C,kn=new C;function Aa(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){kn.fromArray(s,r);let o=n.x*Math.abs(kn.x)+n.y*Math.abs(kn.y)+n.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=i.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jd=new en,Gs=new C,Ra=new C,Tn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):jd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Gs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Ra)),this.expandByPoint(Gs.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},qi=new C,Ca=new C,Cr=new C,mn=new C,Pa=new C,Pr=new C,La=new C,fo=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ca.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(Ca);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=mn.dot(this.direction),l=-mn.dot(Cr),c=mn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ca).addScaledVector(Cr,d),f}intersectSphere(t,e){qi.subVectors(t.center,this.origin);let i=qi.dot(this.direction),n=qi.dot(qi)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,i,n,r){Pa.subVectors(e,t),Pr.subVectors(i,t),La.crossVectors(Pa,Pr);let a=this.direction.dot(La),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,t);let l=o*this.direction.dot(Pr.crossVectors(mn,Pr));if(l<0)return null;let c=o*this.direction.dot(Pa.cross(mn));if(c<0||l+c>a)return null;let h=-o*mn.dot(La);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class s{constructor(t,e,i,n,r,a,o,l,c,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,i,n,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qd,t,tf)}lookAt(t,e,i){let n=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),gn.crossVectors(i,mi),gn.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),gn.crossVectors(i,mi)),gn.normalize(),Lr.crossVectors(mi,gn),n[0]=gn.x,n[4]=Lr.x,n[8]=mi.x,n[1]=gn.y,n[5]=Lr.y,n[9]=mi.y,n[2]=gn.z,n[6]=Lr.z,n[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],v=i[7],M=i[11],R=i[15],T=n[0],E=n[4],P=n[8],y=n[12],w=n[1],U=n[5],k=n[9],Y=n[13],L=n[2],D=n[6],F=n[10],G=n[14],W=n[3],q=n[7],Z=n[11],J=n[15];return r[0]=a*T+o*w+l*L+c*W,r[4]=a*E+o*U+l*D+c*q,r[8]=a*P+o*k+l*F+c*Z,r[12]=a*y+o*Y+l*G+c*J,r[1]=h*T+u*w+d*L+f*W,r[5]=h*E+u*U+d*D+f*q,r[9]=h*P+u*k+d*F+f*Z,r[13]=h*y+u*Y+d*G+f*J,r[2]=g*T+x*w+m*L+p*W,r[6]=g*E+x*U+m*D+p*q,r[10]=g*P+x*k+m*F+p*Z,r[14]=g*y+x*Y+m*G+p*J,r[3]=_*T+v*w+M*L+R*W,r[7]=_*E+v*U+M*D+R*q,r[11]=_*P+v*k+M*F+R*Z,r[15]=_*y+v*Y+M*G+R*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-n*c*u-r*o*d+i*c*d+n*o*f-i*l*f)+x*(+e*l*f-e*c*d+r*a*d-n*a*f+n*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,v=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,T=e*_+i*v+n*M+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=_*E,t[1]=(x*d*r-u*m*r-x*n*f+i*m*f+u*n*p-i*d*p)*E,t[2]=(o*m*r-x*l*r+x*n*c-i*m*c-o*n*p+i*l*p)*E,t[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*f-i*l*f)*E,t[4]=v*E,t[5]=(h*m*r-g*d*r+g*n*f-e*m*f-h*n*p+e*d*p)*E,t[6]=(g*l*r-a*m*r-g*n*c+e*m*c+a*n*p-e*l*p)*E,t[7]=(a*d*r-h*l*r+h*n*c-e*d*c-a*n*f+e*l*f)*E,t[8]=M*E,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*p-e*u*p)*E,t[10]=(a*x*r-g*o*r+g*i*c-e*x*c-a*i*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*f-e*o*f)*E,t[12]=R*E,t[13]=(h*x*n-g*u*n+g*i*d-e*x*d-h*i*m+e*u*m)*E,t[14]=(g*o*n-a*x*n-g*i*l+e*x*l+a*i*m-e*o*m)*E,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*E,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,_=l*c,v=l*h,M=l*u,R=i.x,T=i.y,E=i.z;return n[0]=(1-(x+p))*R,n[1]=(f+M)*R,n[2]=(g-v)*R,n[3]=0,n[4]=(f-M)*T,n[5]=(1-(d+p))*T,n[6]=(m+_)*T,n[7]=0,n[8]=(g+v)*E,n[9]=(m-_)*E,n[10]=(1-(d+x))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=rs.set(n[0],n[1],n[2]).length(),a=rs.set(n[4],n[5],n[6]).length(),o=rs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Pi.copy(this);let c=1/r,h=1/a,u=1/o;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=h,Pi.elements[5]*=h,Pi.elements[6]*=h,Pi.elements[8]*=u,Pi.elements[9]*=u,Pi.elements[10]*=u,e.setFromRotationMatrix(Pi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Qi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(o===Qi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ao)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Qi){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-r),d=(e+t)*c,f=(i+n)*h,g,x;if(o===Qi)g=(a+r)*u,x=-2*u;else if(o===ao)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},rs=new C,Pi=new Kt,Qd=new C(0,0,0),tf=new C(1,1,1),gn=new C,Lr=new C,mi=new C,uh=new Kt,dh=new Qe,An=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ef=0,fh=new C,os=new Qe,Yi=new Kt,Ir=new C,Vs=new C,nf=new C,sf=new Qe,ph=new C(1,0,0),mh=new C(0,1,0),gh=new C(0,0,1),rf={type:"added"},of={type:"removed"},qe=class s extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new An,i=new Qe,n=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Wt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ir.copy(t):Ir.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Vs,Ir,this.up):Yi.lookAt(Ir,Vs,this.up),this.quaternion.setFromRotationMatrix(Yi),n&&(Yi.extractRotation(n.matrixWorld),os.setFromRotationMatrix(Yi),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(rf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(of)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++){let o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};qe.DEFAULT_UP=new C(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=new C,Zi=new C,Ia=new C,$i=new C,as=new C,ls=new C,xh=new C,Da=new C,Ua=new C,Na=new C,Dr=!1,Vn=class s{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Li.subVectors(t,e),n.cross(Li);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Li.subVectors(n,e),Zi.subVectors(i,e),Ia.subVectors(t,e);let a=Li.dot(Li),o=Li.dot(Zi),l=Li.dot(Ia),c=Zi.dot(Zi),h=Zi.dot(Ia),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(t,e,i,n,r,a,o,l){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),this.getInterpolation(t,e,i,n,r,a,o,l)}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static isFrontFacing(t,e,i,n){return Li.subVectors(i,e),Zi.subVectors(t,e),Li.cross(Zi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Li.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;as.subVectors(n,i),ls.subVectors(r,i),Da.subVectors(t,i);let l=as.dot(Da),c=ls.dot(Da);if(l<=0&&c<=0)return e.copy(i);Ua.subVectors(t,n);let h=as.dot(Ua),u=ls.dot(Ua);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(as,a);Na.subVectors(t,r);let f=as.dot(Na),g=ls.dot(Na);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ls,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return xh.subVectors(r,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(xh,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(i).addScaledVector(as,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Fa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Mt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Yd(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Fa(a,r,t+1/3),this.g=Fa(a,r,t),this.b=Fa(a,r,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=Pe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let i=gu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return te.fromWorkingColorSpace(Ke.copy(this),t),Math.round(We(Ke.r*255,0,255))*65536+Math.round(We(Ke.g*255,0,255))*256+Math.round(We(Ke.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ke.copy(this),e);let i=Ke.r,n=Ke.g,r=Ke.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Pe){te.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,i=Ke.g,n=Ke.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(Ur);let i=ba(xn.h,Ur.h,e),n=ba(xn.s,Ur.s,e),r=ba(xn.l,Ur.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Mt;Mt.NAMES=gu;var af=0,nn=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=yn,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=ja,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yn&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ka&&(i.blendSrc=this.blendSrc),this.blendDst!==ja&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ci=class extends nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new C,Nr=new j,_e=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ji(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==il&&(t.usage=this.usage),t}};var mo=class extends _e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var go=class extends _e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var $t=class extends _e{constructor(t,e,i){super(new Float32Array(t),e,i)}};var lf=0,wi=new Kt,ka=new qe,cs=new C,gi=new en,Ws=new en,He=new C,Ee=class s extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?go:mo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,e,i){return wi.makeTranslation(t,e,i),this.applyMatrix4(wi),this}scale(t,e,i){return wi.makeScale(t,e,i),this.applyMatrix4(wi),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $t(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(gi.min,Ws.min),gi.expandByPoint(He),He.addVectors(gi.max,Ws.max),gi.expandByPoint(He)):(gi.expandByPoint(Ws.min),gi.expandByPoint(Ws.max))}gi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(t,c),He.add(cs)),n=Math.max(n,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,r=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new C,h[w]=new C;let u=new C,d=new C,f=new C,g=new j,x=new j,m=new j,p=new C,_=new C;function v(w,U,k){u.fromArray(n,w*3),d.fromArray(n,U*3),f.fromArray(n,k*3),g.fromArray(a,w*2),x.fromArray(a,U*2),m.fromArray(a,k*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let Y=1/(x.x*m.y-m.x*x.y);isFinite(Y)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(Y),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(Y),c[w].add(p),c[U].add(p),c[k].add(p),h[w].add(_),h[U].add(_),h[k].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,U=M.length;w<U;++w){let k=M[w],Y=k.start,L=k.count;for(let D=Y,F=Y+L;D<F;D+=3)v(i[D+0],i[D+1],i[D+2])}let R=new C,T=new C,E=new C,P=new C;function y(w){E.fromArray(r,w*3),P.copy(E);let U=c[w];R.copy(U),R.sub(E.multiplyScalar(E.dot(U))).normalize(),T.crossVectors(P,U);let Y=T.dot(h[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=Y}for(let w=0,U=M.length;w<U;++w){let k=M[w],Y=k.start,L=k.count;for(let D=Y,F=Y+L;D<F;D+=3)y(i[D+0]),y(i[D+1]),y(i[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vh=new Kt,Bn=new fo,Fr=new Tn,_h=new C,hs=new C,us=new C,ds=new C,Ba=new C,kr=new C,Br=new j,Or=new j,zr=new j,yh=new C,Mh=new C,bh=new C,Hr=new C,Gr=new C,ue=class extends qe{constructor(t=new Ee,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ba.fromBufferAttribute(u,t),a?kr.addScaledVector(Ba,h):kr.addScaledVector(Ba.sub(e),h))}e.add(kr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(Fr.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Fr,_h)===null||Bn.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(vh.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(vh),!(i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,R=v;M<R;M+=3){let T=o.getX(M),E=o.getX(M+1),P=o.getX(M+2);n=Vr(this,p,t,i,c,h,u,T,E,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);n=Vr(this,a,t,i,c,h,u,_,v,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,R=v;M<R;M+=3){let T=M,E=M+1,P=M+2;n=Vr(this,p,t,i,c,h,u,T,E,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,v=m+1,M=m+2;n=Vr(this,a,t,i,c,h,u,_,v,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function cf(s,t,e,i,n,r,a,o){let l;if(t.side===Ge?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Sn,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:s}}function Vr(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,hs),s.getVertexPosition(l,us),s.getVertexPosition(c,ds);let h=cf(s,t,e,i,hs,us,ds,Hr);if(h){n&&(Br.fromBufferAttribute(n,o),Or.fromBufferAttribute(n,l),zr.fromBufferAttribute(n,c),h.uv=Vn.getInterpolation(Hr,hs,us,ds,Br,Or,zr,new j)),r&&(Br.fromBufferAttribute(r,o),Or.fromBufferAttribute(r,l),zr.fromBufferAttribute(r,c),h.uv1=Vn.getInterpolation(Hr,hs,us,ds,Br,Or,zr,new j),h.uv2=h.uv1),a&&(yh.fromBufferAttribute(a,o),Mh.fromBufferAttribute(a,l),bh.fromBufferAttribute(a,c),h.normal=Vn.getInterpolation(Hr,hs,us,ds,yh,Mh,bh,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Vn.getNormal(hs,us,ds,u.normal),h.face=u}return h}var ee=class s extends Ee{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(x,m,p,_,v,M,R,T,E,P,y){let w=M/E,U=R/P,k=M/2,Y=R/2,L=T/2,D=E+1,F=P+1,G=0,W=0,q=new C;for(let Z=0;Z<F;Z++){let J=Z*U-Y;for(let st=0;st<D;st++){let X=st*w-k;q[x]=X*_,q[m]=J*v,q[p]=L,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=T>0?1:-1,h.push(q.x,q.y,q.z),u.push(st/E),u.push(1-Z/P),G+=1}}for(let Z=0;Z<P;Z++)for(let J=0;J<E;J++){let st=d+J+D*Z,X=d+J+D*(Z+1),$=d+(J+1)+D*(Z+1),ht=d+(J+1)+D*Z;l.push(st,X,ht),l.push(X,$,ht),W+=6}o.addGroup(f,W,y),f+=W,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Rs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function li(s){let t={};for(let e=0;e<s.length;e++){let i=Rs(s[e]);for(let n in i)t[n]=i[n]}return t}function hf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xu(s){return s.getRenderTarget()===null?s.outputColorSpace:te.workingColorSpace}var Pn={clone:Rs,merge:li},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Te=class extends nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},xo=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},je=class extends xo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ps=1,ll=class extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new je(fs,ps,t,e);n.layers=this.layers,this.add(n);let r=new je(fs,ps,t,e);r.layers=this.layers,this.add(r);let a=new je(fs,ps,t,e);a.layers=this.layers,this.add(a);let o=new je(fs,ps,t,e);o.layers=this.layers,this.add(o);let l=new je(fs,ps,t,e);l.layers=this.layers,this.add(l);let c=new je(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},vo=class extends _i{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cl=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qn?Pe:Si),this.texture=new vo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ee(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:zi});r.uniforms.tEquirect.value=e;let a=new ue(n,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=ui),new ll(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},Oa=new C,ff=new C,pf=new Wt,Ki=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Oa.subVectors(i,e).cross(ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Oa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||pf.getNormalMatrix(t),n=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},On=new Tn,Wr=new C,ir=class{constructor(t=new Ki,e=new Ki,i=new Ki,n=new Ki,r=new Ki,a=new Ki){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qi){let i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],x=n[10],m=n[11],p=n[12],_=n[13],v=n[14],M=n[15];if(i[0].setComponents(l-r,d-c,m-f,M-p).normalize(),i[1].setComponents(l+r,d+c,m+f,M+p).normalize(),i[2].setComponents(l+a,d+h,m+g,M+_).normalize(),i[3].setComponents(l-a,d-h,m-g,M-_).normalize(),i[4].setComponents(l-o,d-u,m-x,M-v).normalize(),e===Qi)i[5].setComponents(l+o,d+u,m+x,M+v).normalize();else if(e===ao)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Wr.x=n.normal.x>0?t.max.x:t.min.x,Wr.y=n.normal.y>0?t.max.y:t.min.y,Wr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function vu(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mf(s,t){let e=t.isWebGL2,i=new WeakMap;function n(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var sn=class s extends Ee{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let v=0;v<c;v++){let M=v*u-r;g.push(M,-_,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let v=_+c*p,M=_+c*(p+1),R=_+1+c*(p+1),T=_+1+c*p;f.push(v,M,T),f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hf=`vec3 transformedNormal = objectNormal;
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
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`
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
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`struct PhysicalMaterial {
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
}`,gp=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tm=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,Hm=`#define TOON
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
}`,Gm=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:gf,alphahash_pars_fragment:xf,alphamap_fragment:vf,alphamap_pars_fragment:_f,alphatest_fragment:yf,alphatest_pars_fragment:Mf,aomap_fragment:bf,aomap_pars_fragment:wf,batching_pars_vertex:Sf,batching_vertex:Ef,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Uf,color_fragment:Nf,color_pars_fragment:Ff,color_pars_vertex:kf,color_vertex:Bf,common:Of,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Vf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:Zf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Jf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:cp,envmap_vertex:jf,fog_vertex:Qf,fog_pars_vertex:tp,fog_fragment:ep,fog_pars_fragment:ip,gradientmap_pars_fragment:np,lightmap_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:op,lights_lambert_pars_fragment:ap,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:xp,lights_fragment_end:vp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:bp,map_fragment:wp,map_pars_fragment:Sp,map_particle_fragment:Ep,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Ip,normal_fragment_begin:Dp,normal_fragment_maps:Up,normal_pars_fragment:Np,normal_pars_vertex:Fp,normal_vertex:kp,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Gp,opaque_fragment:Vp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:Zp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:jp,shadowmap_vertex:Qp,shadowmask_pars_fragment:tm,skinbase_vertex:em,skinning_pars_vertex:im,skinning_vertex:nm,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:dm,uv_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:xm,backgroundCube_frag:vm,cube_vert:_m,cube_frag:ym,depth_vert:Mm,depth_frag:bm,distanceRGBA_vert:wm,distanceRGBA_frag:Sm,equirect_vert:Em,equirect_frag:Tm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Lm,meshlambert_frag:Im,meshmatcap_vert:Dm,meshmatcap_frag:Um,meshnormal_vert:Nm,meshnormal_frag:Fm,meshphong_vert:km,meshphong_frag:Bm,meshphysical_vert:Om,meshphysical_frag:zm,meshtoon_vert:Hm,meshtoon_frag:Gm,points_vert:Vm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:Ym,sprite_frag:Zm},at={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Oi={basic:{uniforms:li([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:li([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:li([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:li([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:li([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:li([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:li([at.points,at.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:li([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:li([at.common,at.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:li([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:li([at.sprite,at.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:li([at.common,at.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:li([at.lights,at.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Oi.physical={uniforms:li([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Xr={r:0,b:0,g:0};function $m(s,t,e,i,n,r,a){let o=new Mt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),_=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Bo)?(h===void 0&&(h=new ue(new ee(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:Rs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=te.getTransfer(v.colorSpace)!==ce,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ue(new sn(2,2),new Te({name:"BackgroundMaterial",uniforms:Rs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=te.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(Xr,xu(s)),i.buffers.color.setClear(Xr.r,Xr.g,Xr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function Jm(s,t,e,i){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,D,F,G,W){let q=!1;if(a){let Z=x(G,F,D);c!==Z&&(c=Z,f(c.object)),q=p(L,G,F,W),q&&_(L,G,F,W)}else{let Z=D.wireframe===!0;(c.geometry!==G.id||c.program!==F.id||c.wireframe!==Z)&&(c.geometry=G.id,c.program=F.id,c.wireframe=Z,q=!0)}W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,P(L,D,F,G),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,D,F){let G=F.wireframe===!0,W=o[L.id];W===void 0&&(W={},o[L.id]=W);let q=W[D.id];q===void 0&&(q={},W[D.id]=q);let Z=q[G];return Z===void 0&&(Z=m(d()),q[G]=Z),Z}function m(L){let D=[],F=[],G=[];for(let W=0;W<n;W++)D[W]=0,F[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:G,object:L,attributes:{},index:null}}function p(L,D,F,G){let W=c.attributes,q=D.attributes,Z=0,J=F.getAttributes();for(let st in J)if(J[st].location>=0){let $=W[st],ht=q[st];if(ht===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),$===void 0||$.attribute!==ht||ht&&$.data!==ht.data)return!0;Z++}return c.attributesNum!==Z||c.index!==G}function _(L,D,F,G){let W={},q=D.attributes,Z=0,J=F.getAttributes();for(let st in J)if(J[st].location>=0){let $=q[st];$===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let ht={};ht.attribute=$,$&&$.data&&(ht.data=$.data),W[st]=ht,Z++}c.attributes=W,c.attributesNum=Z,c.index=G}function v(){let L=c.newAttributes;for(let D=0,F=L.length;D<F;D++)L[D]=0}function M(L){R(L,0)}function R(L,D){let F=c.newAttributes,G=c.enabledAttributes,W=c.attributeDivisors;F[L]=1,G[L]===0&&(s.enableVertexAttribArray(L),G[L]=1),W[L]!==D&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),W[L]=D)}function T(){let L=c.newAttributes,D=c.enabledAttributes;for(let F=0,G=D.length;F<G;F++)D[F]!==L[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function E(L,D,F,G,W,q,Z){Z===!0?s.vertexAttribIPointer(L,D,F,W,q):s.vertexAttribPointer(L,D,F,G,W,q)}function P(L,D,F,G){if(i.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let W=G.attributes,q=F.getAttributes(),Z=D.defaultAttributeValues;for(let J in q){let st=q[J];if(st.location>=0){let X=W[J];if(X===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let $=X.normalized,ht=X.itemSize,_t=e.get(X);if(_t===void 0)continue;let vt=_t.buffer,Nt=_t.type,kt=_t.bytesPerElement,Tt=i.isWebGL2===!0&&(Nt===s.INT||Nt===s.UNSIGNED_INT||X.gpuType===ru);if(X.isInterleavedBufferAttribute){let Jt=X.data,B=Jt.stride,si=X.offset;if(Jt.isInstancedInterleavedBuffer){for(let bt=0;bt<st.locationSize;bt++)R(st.location+bt,Jt.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Jt.meshPerAttribute*Jt.count)}else for(let bt=0;bt<st.locationSize;bt++)M(st.location+bt);s.bindBuffer(s.ARRAY_BUFFER,vt);for(let bt=0;bt<st.locationSize;bt++)E(st.location+bt,ht/st.locationSize,Nt,$,B*kt,(si+ht/st.locationSize*bt)*kt,Tt)}else{if(X.isInstancedBufferAttribute){for(let Jt=0;Jt<st.locationSize;Jt++)R(st.location+Jt,X.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Jt=0;Jt<st.locationSize;Jt++)M(st.location+Jt);s.bindBuffer(s.ARRAY_BUFFER,vt);for(let Jt=0;Jt<st.locationSize;Jt++)E(st.location+Jt,ht/st.locationSize,Nt,$,ht*kt,ht/st.locationSize*Jt*kt,Tt)}}else if(Z!==void 0){let $=Z[J];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(st.location,$);break;case 3:s.vertexAttrib3fv(st.location,$);break;case 4:s.vertexAttrib4fv(st.location,$);break;default:s.vertexAttrib1fv(st.location,$)}}}}T()}function y(){k();for(let L in o){let D=o[L];for(let F in D){let G=D[F];for(let W in G)g(G[W].object),delete G[W];delete D[F]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;let D=o[L.id];for(let F in D){let G=D[F];for(let W in G)g(G[W].object),delete G[W];delete D[F]}delete o[L.id]}function U(L){for(let D in o){let F=o[D];if(F[L.id]===void 0)continue;let G=F[L.id];for(let W in G)g(G[W].object),delete G[W];delete F[L.id]}}function k(){Y(),h=!0,c!==l&&(c=l,f(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:Y,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function Km(s,t,e,i){let n=i.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(n)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function jm(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=a||t.has("OES_texture_float"),R=v&&M,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:T}}function Qm(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Ki,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,v=_*4,M=p.clippingState||null;l.value=M,M=h(g,d,v,f);for(let R=0;R!==v;++R)M[R]=e[R];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=f;v!==x;++v,M+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function t0(s){let t=new WeakMap;function e(a,o){return o===Qa?a.mapping=Es:o===tl&&(a.mapping=Ts),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Qa||o===tl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new cl(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Cs=class extends xo{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ms=4,wh=[.125,.215,.35,.446,.526,.582],Gn=20,za=new Cs,Sh=new Mt,Ha=null,Ga=0,Va=0,zn=(1+Math.sqrt(5))/2,ms=1/zn,Eh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,zn,ms),new C(0,zn,-ms),new C(ms,0,zn),new C(-ms,0,zn),new C(zn,ms,0),new C(-zn,ms,0)],_o=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Ga,Va),t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:vi,format:xi,colorSpace:tn,depthBuffer:!1},n=Th(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=i0(r,t,e)}return n}_compileMaterial(t){let e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,i,n){let o=new je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Sh),h.toneMapping=Mn,h.autoClear=!1;let f=new ci({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new ue(new ee,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Sh),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;qr(n,_*v,p>2?v:0,v,v),h.setRenderTarget(n),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Es||t.mapping===Ts;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;qr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,za)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Eh[(n-1)%Eh.length];this._blur(t,n-1,n,r,a)}e.autoClear=i}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ue(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);let p=[],_=0;for(let E=0;E<Gn;++E){let P=E/x,y=Math.exp(-P*P/2);p.push(y),E===0?_+=y:E<m&&(_+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let M=this._sizeLods[n],R=3*M*(n>v-Ms?n-v+Ms:0),T=4*(this._cubeSize-M);qr(e,R,T,3*M,2*M),l.setRenderTarget(e),l.render(u,za)}};function e0(s){let t=[],e=[],i=[],n=s,r=s-Ms+1+wh.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-Ms?l=wh[a-s+Ms-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),v=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){let E=T%3*2/3-1,P=T>2?0:-1,y=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];_.set(y,x*g*T),v.set(d,m*g*T);let w=[T,T,T,T,T,T];M.set(w,p*g*T)}let R=new Ee;R.setAttribute("position",new _e(_,x)),R.setAttribute("uv",new _e(v,m)),R.setAttribute("faceIndex",new _e(M,p)),t.push(R),n>Ms&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Th(s,t,e){let i=new Xe(s,t,e);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function i0(s,t,e){let i=new Float32Array(Gn),n=new C(0,1,0);return new Te({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ah(){return new Te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Rh(){return new Te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function n0(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Qa||l===tl,h=l===Es||l===Ts;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new _o(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new _o(s));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function s0(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function r0(s,t,e,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete n[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,M=_.length;v<M;v+=3){let R=_[v+0],T=_[v+1],E=_[v+2];d.push(R,T,T,E,E,R)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,M=_.length/3-1;v<M;v+=3){let R=v+0,T=v+1,E=v+2;d.push(R,T,T,E,E,R)}}else return;let m=new(mu(d)?go:mo)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function o0(s,t,e,i){let n=i.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*l),e.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(n)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,x),e.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,x);let p=0;for(let _=0;_<x;_++)p+=g[_];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function a0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function l0(s,t){return s[0]-t[0]}function c0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function h0(s,t,e){let i={},n=new Float32Array(8),r=new WeakMap,a=new be,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],P=0;_===!0&&(P=1),v===!0&&(P=2),M===!0&&(P=3);let y=h.attributes.position.count*P,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let U=new Float32Array(y*w*4*g),k=new uo(U,y,w,g);k.type=_n,k.needsUpdate=!0;let Y=P*4;for(let D=0;D<g;D++){let F=R[D],G=T[D],W=E[D],q=y*w*4*D;for(let Z=0;Z<F.count;Z++){let J=Z*Y;_===!0&&(a.fromBufferAttribute(F,Z),U[q+J+0]=a.x,U[q+J+1]=a.y,U[q+J+2]=a.z,U[q+J+3]=0),v===!0&&(a.fromBufferAttribute(G,Z),U[q+J+4]=a.x,U[q+J+5]=a.y,U[q+J+6]=a.z,U[q+J+7]=0),M===!0&&(a.fromBufferAttribute(W,Z),U[q+J+8]=a.x,U[q+J+9]=a.y,U[q+J+10]=a.z,U[q+J+11]=W.itemSize===4?a.w:1)}}x={count:g,texture:k,size:new j(y,w)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<f;v++){let M=g[v];M[0]=v,M[1]=d[v]}g.sort(c0);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(l0);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let M=o[v],R=M[0],T=M[1];R!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+v)!==x[R]&&h.setAttribute("morphTarget"+v,x[R]),m&&h.getAttribute("morphNormal"+v)!==m[R]&&h.setAttribute("morphNormal"+v,m[R]),n[v]=T,p+=T):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),n[v]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function u0(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var yo=class extends _i{constructor(t,e,i,n,r,a,o,l,c,h){if(h=h!==void 0?h:Xn,h!==Xn&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xn&&(i=vn),i===void 0&&h===As&&(i=Wn),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_u=new _i,yu=new yo(1,1);yu.compareFunction=pu;var Mu=new uo,bu=new al,wu=new vo,Ch=[],Ph=[],Lh=new Float32Array(16),Ih=new Float32Array(9),Dh=new Float32Array(4);function Ds(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Ch[n];if(r===void 0&&(r=new Float32Array(n),Ch[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Be(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function zo(s,t){let e=Ph[t];e===void 0&&(e=new Int32Array(t),Ph[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function d0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function f0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),Be(e,t)}}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),Be(e,t)}}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),Be(e,t)}}function g0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Dh.set(i),s.uniformMatrix2fv(this.addr,!1,Dh),Be(e,i)}}function x0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Ih.set(i),s.uniformMatrix3fv(this.addr,!1,Ih),Be(e,i)}}function v0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Lh.set(i),s.uniformMatrix4fv(this.addr,!1,Lh),Be(e,i)}}function _0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),Be(e,t)}}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),Be(e,t)}}function b0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),Be(e,t)}}function w0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function S0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),Be(e,t)}}function E0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),Be(e,t)}}function T0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),Be(e,t)}}function A0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?yu:_u;e.setTexture2D(t||r,n)}function R0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||bu,n)}function C0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||wu,n)}function P0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Mu,n)}function L0(s){switch(s){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return x0;case 35676:return v0;case 5124:case 35670:return _0;case 35667:case 35671:return y0;case 35668:case 35672:return M0;case 35669:case 35673:return b0;case 5125:return w0;case 36294:return S0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}function I0(s,t){s.uniform1fv(this.addr,t)}function D0(s,t){let e=Ds(t,this.size,2);s.uniform2fv(this.addr,e)}function U0(s,t){let e=Ds(t,this.size,3);s.uniform3fv(this.addr,e)}function N0(s,t){let e=Ds(t,this.size,4);s.uniform4fv(this.addr,e)}function F0(s,t){let e=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function k0(s,t){let e=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function B0(s,t){let e=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function O0(s,t){s.uniform1iv(this.addr,t)}function z0(s,t){s.uniform2iv(this.addr,t)}function H0(s,t){s.uniform3iv(this.addr,t)}function G0(s,t){s.uniform4iv(this.addr,t)}function V0(s,t){s.uniform1uiv(this.addr,t)}function W0(s,t){s.uniform2uiv(this.addr,t)}function X0(s,t){s.uniform3uiv(this.addr,t)}function q0(s,t){s.uniform4uiv(this.addr,t)}function Y0(s,t,e){let i=this.cache,n=t.length,r=zo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||_u,r[a])}function Z0(s,t,e){let i=this.cache,n=t.length,r=zo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||bu,r[a])}function $0(s,t,e){let i=this.cache,n=t.length,r=zo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||wu,r[a])}function J0(s,t,e){let i=this.cache,n=t.length,r=zo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Mu,r[a])}function K0(s){switch(s){case 5126:return I0;case 35664:return D0;case 35665:return U0;case 35666:return N0;case 35674:return F0;case 35675:return k0;case 35676:return B0;case 5124:case 35670:return O0;case 35667:case 35671:return z0;case 35668:case 35672:return H0;case 35669:case 35673:return G0;case 5125:return V0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return J0}}var hl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=L0(e.type)}},ul=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K0(e.type)}},dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},Wa=/(\w+)(\])?(\[|\.)?/g;function Uh(s,t){s.seq.push(t),s.map[t.id]=t}function j0(s,t,e){let i=s.name,n=i.length;for(Wa.lastIndex=0;;){let r=Wa.exec(i),a=Wa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Uh(e,c===void 0?new hl(o,s,t):new ul(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new dl(o),Uh(e,u)),e=u}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);j0(r,a,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Nh(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Q0=37297,tg=0;function eg(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function ig(s){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(s),i;switch(t===e?i="":t===oo&&e===ro?i="LinearDisplayP3ToLinearSRGB":t===ro&&e===oo&&(i="LinearSRGBToLinearDisplayP3"),s){case tn:case Oo:return[i,"LinearTransferOETF"];case Pe:case Jl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Fh(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+eg(s.getShaderSource(t),a)}else return n}function ng(s,t){let e=ig(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function sg(s,t){let e;switch(t){case Xl:e="Linear";break;case ql:e="Reinhard";break;case Yl:e="OptimizedCineon";break;case cr:e="ACESFilmic";break;case Zl:e="AgX";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function rg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function og(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function ag(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lg(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function bs(s){return s!==""}function kh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(s){return s.replace(cg,ug)}var hg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ug(s,t){let e=Ut[t];if(e===void 0){let i=hg.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return fl(e)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(s){return s.replace(dg,fg)}function fg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function zh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function mg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Es:case Ts:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function xg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nu:t="ENVMAP_BLENDING_MULTIPLY";break;case Ed:t="ENVMAP_BLENDING_MIX";break;case Td:t="ENVMAP_BLENDING_ADD";break}return t}function vg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function _g(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=pg(e),c=mg(e),h=gg(e),u=xg(e),d=vg(e),f=e.isWebGL2?"":rg(e),g=og(e),x=ag(r),m=n.createProgram(),p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),_.length>0&&(_+=`
`)):(p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),_=[f,zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Mn?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,ng("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),a=fl(a),a=kh(a,e),a=Bh(a,e),o=fl(o),o=kh(o,e),o=Bh(o,e),a=Oh(a),o=Oh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=v+p+a,R=v+_+o,T=Nh(n,n.VERTEX_SHADER,M),E=Nh(n,n.FRAGMENT_SHADER,R);n.attachShader(m,T),n.attachShader(m,E),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function P(k){if(s.debug.checkShaderErrors){let Y=n.getProgramInfoLog(m).trim(),L=n.getShaderInfoLog(T).trim(),D=n.getShaderInfoLog(E).trim(),F=!0,G=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,m,T,E);else{let W=Fh(n,T,"vertex"),q=Fh(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+W+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||D==="")&&(G=!1);G&&(k.diagnostics={runnable:F,programLog:Y,vertexShader:{log:L,prefix:p},fragmentShader:{log:D,prefix:_}})}n.deleteShader(T),n.deleteShader(E),y=new Ss(n,m),w=lg(n,m)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=n.getProgramParameter(m,Q0)),U},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=E,this}var yg=0,pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ml(t),e.set(t,i)),i}},ml=class{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}};function Mg(s,t,e,i,n,r,a){let o=new po,l=new pl,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,w,U,k,Y){let L=k.fog,D=Y.geometry,F=y.isMeshStandardMaterial?k.environment:null,G=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),W=G&&G.mapping===Bo?G.image.height:null,q=g[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=Z!==void 0?Z.length:0,st=0;D.morphAttributes.position!==void 0&&(st=1),D.morphAttributes.normal!==void 0&&(st=2),D.morphAttributes.color!==void 0&&(st=3);let X,$,ht,_t;if(q){let ri=Oi[q];X=ri.vertexShader,$=ri.fragmentShader}else X=y.vertexShader,$=y.fragmentShader,l.update(y),ht=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);let vt=s.getRenderTarget(),Nt=Y.isInstancedMesh===!0,kt=Y.isBatchedMesh===!0,Tt=!!y.map,Jt=!!y.matcap,B=!!G,si=!!y.aoMap,bt=!!y.lightMap,It=!!y.bumpMap,mt=!!y.normalMap,we=!!y.displacementMap,Ot=!!y.emissiveMap,A=!!y.metalnessMap,b=!!y.roughnessMap,z=y.anisotropy>0,tt=y.clearcoat>0,Q=y.iridescence>0,et=y.sheen>0,gt=y.transmission>0,ut=z&&!!y.anisotropyMap,ft=tt&&!!y.clearcoatMap,Et=tt&&!!y.clearcoatNormalMap,zt=tt&&!!y.clearcoatRoughnessMap,K=Q&&!!y.iridescenceMap,re=Q&&!!y.iridescenceThicknessMap,Xt=et&&!!y.sheenColorMap,Lt=et&&!!y.sheenRoughnessMap,yt=!!y.specularMap,pt=!!y.specularColorMap,Bt=!!y.specularIntensityMap,ie=gt&&!!y.transmissionMap,Re=gt&&!!y.thicknessMap,Gt=!!y.gradientMap,ot=!!y.alphaMap,I=y.alphaTest>0,lt=!!y.alphaHash,ct=!!y.extensions,At=!!D.attributes.uv1,wt=!!D.attributes.uv2,fe=!!D.attributes.uv3,pe=Mn;return y.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(pe=s.toneMapping),{isWebGL2:h,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:$,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:kt,instancing:Nt,instancingColor:Nt&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:vt===null?s.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:tn,map:Tt,matcap:Jt,envMap:B,envMapMode:B&&G.mapping,envMapCubeUVHeight:W,aoMap:si,lightMap:bt,bumpMap:It,normalMap:mt,displacementMap:d&&we,emissiveMap:Ot,normalMapObjectSpace:mt&&y.normalMapType===Od,normalMapTangentSpace:mt&&y.normalMapType===fu,metalnessMap:A,roughnessMap:b,anisotropy:z,anisotropyMap:ut,clearcoat:tt,clearcoatMap:ft,clearcoatNormalMap:Et,clearcoatRoughnessMap:zt,iridescence:Q,iridescenceMap:K,iridescenceThicknessMap:re,sheen:et,sheenColorMap:Xt,sheenRoughnessMap:Lt,specularMap:yt,specularColorMap:pt,specularIntensityMap:Bt,transmission:gt,transmissionMap:ie,thicknessMap:Re,gradientMap:Gt,opaque:y.transparent===!1&&y.blending===yn,alphaMap:ot,alphaTest:I,alphaHash:lt,combine:y.combine,mapUv:Tt&&x(y.map.channel),aoMapUv:si&&x(y.aoMap.channel),lightMapUv:bt&&x(y.lightMap.channel),bumpMapUv:It&&x(y.bumpMap.channel),normalMapUv:mt&&x(y.normalMap.channel),displacementMapUv:we&&x(y.displacementMap.channel),emissiveMapUv:Ot&&x(y.emissiveMap.channel),metalnessMapUv:A&&x(y.metalnessMap.channel),roughnessMapUv:b&&x(y.roughnessMap.channel),anisotropyMapUv:ut&&x(y.anisotropyMap.channel),clearcoatMapUv:ft&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Et&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&x(y.sheenRoughnessMap.channel),specularMapUv:yt&&x(y.specularMap.channel),specularColorMapUv:pt&&x(y.specularColorMap.channel),specularIntensityMapUv:Bt&&x(y.specularIntensityMap.channel),transmissionMapUv:ie&&x(y.transmissionMap.channel),thicknessMapUv:Re&&x(y.thicknessMap.channel),alphaMapUv:ot&&x(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(mt||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:wt,vertexUv3s:fe,pointsUvs:Y.isPoints===!0&&!!D.attributes.uv&&(Tt||ot),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:st,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ge,flipSided:y.side===Ge,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ct&&y.extensions.derivatives===!0,extensionFragDepth:ct&&y.extensions.fragDepth===!0,extensionDrawBuffers:ct&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)w.push(U),w.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(_(w,y),v(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){let w=g[y.type],U;if(w){let k=Oi[w];U=Pn.clone(k.uniforms)}else U=y.uniforms;return U}function R(y,w){let U;for(let k=0,Y=c.length;k<Y;k++){let L=c[k];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new _g(s,w,y,r),c.push(U)),U}function T(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:P}}function bg(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function wg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Hh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gh(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||wg),i.length>1&&i.sort(d||Hh),n.length>1&&n.sort(d||Hh)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Sg(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Gh,s.set(i,[a])):n>=r.length?(a=new Gh,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Eg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Mt};break;case"SpotLight":e={position:new C,direction:new C,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Tg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ag=0;function Rg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Cg(s,t){let e=new Eg,i=Tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);let r=new C,a=new Kt,o=new Kt;function l(h,u){let d=0,f=0,g=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let x=0,m=0,p=0,_=0,v=0,M=0,R=0,T=0,E=0,P=0,y=0;h.sort(Rg);let w=u===!0?Math.PI:1;for(let k=0,Y=h.length;k<Y;k++){let L=h[k],D=L.color,F=L.intensity,G=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=D.r*F*w,f+=D.g*F*w,g+=D.b*F*w;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],F);y++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let Z=L.shadow,J=i.get(L);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.directionalShadow[x]=J,n.directionalShadowMap[x]=W,n.directionalShadowMatrix[x]=L.shadow.matrix,M++}n.directional[x]=q,x++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(D).multiplyScalar(F*w),q.distance=G,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[p]=q;let Z=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,Z.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[p]=Z.matrix,L.castShadow){let J=i.get(L);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.spotShadow[p]=J,n.spotShadowMap[p]=W,T++}p++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(D).multiplyScalar(F),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=q,_++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Z=L.shadow,J=i.get(L);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=L.shadow.matrix,R++}n.point[m]=q,m++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(F*w),q.groundColor.copy(L.groundColor).multiplyScalar(F*w),n.hemi[v]=q,v++}}_>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;let U=n.hash;(U.directionalLength!==x||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==_||U.hemiLength!==v||U.numDirectionalShadows!==M||U.numPointShadows!==R||U.numSpotShadows!==T||U.numSpotMaps!==E||U.numLightProbes!==y)&&(n.directional.length=x,n.spot.length=p,n.rectArea.length=_,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=T+E-P,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=y,U.directionalLength=x,U.pointLength=m,U.spotLength=p,U.rectAreaLength=_,U.hemiLength=v,U.numDirectionalShadows=M,U.numPointShadows=R,U.numSpotShadows=T,U.numSpotMaps=E,U.numLightProbes=y,n.version=Ag++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let M=h[_];if(M.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(M.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let R=n.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:n}}function Vh(s,t){let e=new Cg(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Pg(s,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Vh(s,t),e.set(r,[l])):a>=o.length?(l=new Vh(s,t),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}var gl=class extends nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xl=class extends nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Dg(s,t,e){let i=new ir,n=new j,r=new j,a=new be,o=new gl({depthPacking:Bd}),l=new xl,c={},h=e.maxTextureSize,u={[Sn]:Ge,[Ge]:Sn,[ge]:ge},d=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:Lg,fragmentShader:Ig}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=s.getRenderTarget(),w=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),k=s.state;k.setBlending(zi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Y=p!==Ji&&this.type===Ji,L=p===Ji&&this.type!==Ji;for(let D=0,F=T.length;D<F;D++){let G=T[D],W=G.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let q=W.getFrameExtents();if(n.multiply(q),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/q.x),n.x=r.x*q.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/q.y),n.y=r.y*q.y,W.mapSize.y=r.y)),W.map===null||Y===!0||L===!0){let J=this.type!==Ji?{minFilter:Ve,magFilter:Ve}:{};W.map!==null&&W.map.dispose(),W.map=new Xe(n.x,n.y,J),W.map.texture.name=G.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let Z=W.getViewportCount();for(let J=0;J<Z;J++){let st=W.getViewport(J);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),k.viewport(a),W.updateMatrices(G,J),i=W.getFrustum(),M(E,P,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===Ji&&_(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,w,U)};function _(T,E){let P=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xe(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,P,f,x,null)}function v(T,E,P,y){let w=null,U=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)w=U;else if(w=P.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=w.uuid,Y=E.uuid,L=c[k];L===void 0&&(L={},c[k]=L);let D=L[Y];D===void 0&&(D=w.clone(),L[Y]=D,E.addEventListener("dispose",R)),w=D}if(w.visible=E.visible,w.wireframe=E.wireframe,y===Ji?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let k=s.properties.get(w);k.light=P}return w}function M(T,E,P,y,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ji)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let Y=t.update(T),L=T.material;if(Array.isArray(L)){let D=Y.groups;for(let F=0,G=D.length;F<G;F++){let W=D[F],q=L[W.materialIndex];if(q&&q.visible){let Z=v(T,q,y,w);T.onBeforeShadow(s,T,E,P,Y,Z,W),s.renderBufferDirect(P,null,Y,Z,T,W),T.onAfterShadow(s,T,E,P,Y,Z,W)}}}else if(L.visible){let D=v(T,L,y,w);T.onBeforeShadow(s,T,E,P,Y,D,null),s.renderBufferDirect(P,null,Y,D,T,null),T.onAfterShadow(s,T,E,P,Y,D,null)}}let k=T.children;for(let Y=0,L=k.length;Y<L;Y++)M(k[Y],E,P,y,w)}function R(T){T.target.removeEventListener("dispose",R);for(let P in c){let y=c[P],w=T.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function Ug(s,t,e){let i=e.isWebGL2;function n(){let I=!1,lt=new be,ct=null,At=new be(0,0,0,0);return{setMask:function(wt){ct!==wt&&!I&&(s.colorMask(wt,wt,wt,wt),ct=wt)},setLocked:function(wt){I=wt},setClear:function(wt,fe,pe,Oe,ri){ri===!0&&(wt*=Oe,fe*=Oe,pe*=Oe),lt.set(wt,fe,pe,Oe),At.equals(lt)===!1&&(s.clearColor(wt,fe,pe,Oe),At.copy(lt))},reset:function(){I=!1,ct=null,At.set(-1,0,0,0)}}}function r(){let I=!1,lt=null,ct=null,At=null;return{setTest:function(wt){wt?kt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(wt){lt!==wt&&!I&&(s.depthMask(wt),lt=wt)},setFunc:function(wt){if(ct!==wt){switch(wt){case vd:s.depthFunc(s.NEVER);break;case _d:s.depthFunc(s.ALWAYS);break;case yd:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case bd:s.depthFunc(s.GEQUAL);break;case wd:s.depthFunc(s.GREATER);break;case Sd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=wt}},setLocked:function(wt){I=wt},setClear:function(wt){At!==wt&&(s.clearDepth(wt),At=wt)},reset:function(){I=!1,lt=null,ct=null,At=null}}}function a(){let I=!1,lt=null,ct=null,At=null,wt=null,fe=null,pe=null,Oe=null,ri=null;return{setTest:function(me){I||(me?kt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(me){lt!==me&&!I&&(s.stencilMask(me),lt=me)},setFunc:function(me,oi,Bi){(ct!==me||At!==oi||wt!==Bi)&&(s.stencilFunc(me,oi,Bi),ct=me,At=oi,wt=Bi)},setOp:function(me,oi,Bi){(fe!==me||pe!==oi||Oe!==Bi)&&(s.stencilOp(me,oi,Bi),fe=me,pe=oi,Oe=Bi)},setLocked:function(me){I=me},setClear:function(me){ri!==me&&(s.clearStencil(me),ri=me)},reset:function(){I=!1,lt=null,ct=null,At=null,wt=null,fe=null,pe=null,Oe=null,ri=null}}}let o=new n,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,v=null,M=null,R=null,T=null,E=null,P=null,y=new Mt(0,0,0),w=0,U=!1,k=null,Y=null,L=null,D=null,F=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,q=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=q>=2);let J=null,st={},X=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ht=new be().fromArray(X),_t=new be().fromArray($);function vt(I,lt,ct,At){let wt=new Uint8Array(4),fe=s.createTexture();s.bindTexture(I,fe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<ct;pe++)i&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(lt,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(lt+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return fe}let Nt={};Nt[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),Nt[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Nt[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Nt[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),kt(s.DEPTH_TEST),l.setFunc(eo),Ot(!1),A(Sc),kt(s.CULL_FACE),mt(zi);function kt(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Tt(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Jt(I,lt){return f[I]!==lt?(s.bindFramebuffer(I,lt),f[I]=lt,i&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=lt),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=lt)),!0):!1}function B(I,lt){let ct=x,At=!1;if(I)if(ct=g.get(lt),ct===void 0&&(ct=[],g.set(lt,ct)),I.isWebGLMultipleRenderTargets){let wt=I.texture;if(ct.length!==wt.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,pe=wt.length;fe<pe;fe++)ct[fe]=s.COLOR_ATTACHMENT0+fe;ct.length=wt.length,At=!0}}else ct[0]!==s.COLOR_ATTACHMENT0&&(ct[0]=s.COLOR_ATTACHMENT0,At=!0);else ct[0]!==s.BACK&&(ct[0]=s.BACK,At=!0);At&&(e.isWebGL2?s.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function si(I){return m!==I?(s.useProgram(I),m=I,!0):!1}let bt={[Hn]:s.FUNC_ADD,[nd]:s.FUNC_SUBTRACT,[sd]:s.FUNC_REVERSE_SUBTRACT};if(i)bt[Ac]=s.MIN,bt[Rc]=s.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(bt[Ac]=I.MIN_EXT,bt[Rc]=I.MAX_EXT)}let It={[rd]:s.ZERO,[od]:s.ONE,[ad]:s.SRC_COLOR,[Ka]:s.SRC_ALPHA,[fd]:s.SRC_ALPHA_SATURATE,[ud]:s.DST_COLOR,[cd]:s.DST_ALPHA,[ld]:s.ONE_MINUS_SRC_COLOR,[ja]:s.ONE_MINUS_SRC_ALPHA,[dd]:s.ONE_MINUS_DST_COLOR,[hd]:s.ONE_MINUS_DST_ALPHA,[pd]:s.CONSTANT_COLOR,[md]:s.ONE_MINUS_CONSTANT_COLOR,[gd]:s.CONSTANT_ALPHA,[xd]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(I,lt,ct,At,wt,fe,pe,Oe,ri,me){if(I===zi){p===!0&&(Tt(s.BLEND),p=!1);return}if(p===!1&&(kt(s.BLEND),p=!0),I!==id){if(I!==_||me!==U){if((v!==Hn||T!==Hn)&&(s.blendEquation(s.FUNC_ADD),v=Hn,T=Hn),me)switch(I){case yn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Di:s.blendFunc(s.ONE,s.ONE);break;case Ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Di:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,R=null,E=null,P=null,y.set(0,0,0),w=0,_=I,U=me}return}wt=wt||lt,fe=fe||ct,pe=pe||At,(lt!==v||wt!==T)&&(s.blendEquationSeparate(bt[lt],bt[wt]),v=lt,T=wt),(ct!==M||At!==R||fe!==E||pe!==P)&&(s.blendFuncSeparate(It[ct],It[At],It[fe],It[pe]),M=ct,R=At,E=fe,P=pe),(Oe.equals(y)===!1||ri!==w)&&(s.blendColor(Oe.r,Oe.g,Oe.b,ri),y.copy(Oe),w=ri),_=I,U=!1}function we(I,lt){I.side===ge?Tt(s.CULL_FACE):kt(s.CULL_FACE);let ct=I.side===Ge;lt&&(ct=!ct),Ot(ct),I.blending===yn&&I.transparent===!1?mt(zi):mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let At=I.stencilWrite;c.setTest(At),At&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),z(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?kt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(I){k!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),k=I)}function A(I){I!==td?(kt(s.CULL_FACE),I!==Y&&(I===Sc?s.cullFace(s.BACK):I===ed?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),Y=I}function b(I){I!==L&&(W&&s.lineWidth(I),L=I)}function z(I,lt,ct){I?(kt(s.POLYGON_OFFSET_FILL),(D!==lt||F!==ct)&&(s.polygonOffset(lt,ct),D=lt,F=ct)):Tt(s.POLYGON_OFFSET_FILL)}function tt(I){I?kt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function Q(I){I===void 0&&(I=s.TEXTURE0+G-1),J!==I&&(s.activeTexture(I),J=I)}function et(I,lt,ct){ct===void 0&&(J===null?ct=s.TEXTURE0+G-1:ct=J);let At=st[ct];At===void 0&&(At={type:void 0,texture:void 0},st[ct]=At),(At.type!==I||At.texture!==lt)&&(J!==ct&&(s.activeTexture(ct),J=ct),s.bindTexture(I,lt||Nt[I]),At.type=I,At.texture=lt)}function gt(){let I=st[J];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){ht.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ht.copy(I))}function ie(I){_t.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),_t.copy(I))}function Re(I,lt){let ct=u.get(lt);ct===void 0&&(ct=new WeakMap,u.set(lt,ct));let At=ct.get(I);At===void 0&&(At=s.getUniformBlockIndex(lt,I.name),ct.set(I,At))}function Gt(I,lt){let At=u.get(lt).get(I);h.get(lt)!==At&&(s.uniformBlockBinding(lt,At,I.__bindingPointIndex),h.set(lt,At))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,st={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,v=null,M=null,R=null,T=null,E=null,P=null,y=new Mt(0,0,0),w=0,U=!1,k=null,Y=null,L=null,D=null,F=null,ht.set(0,0,s.canvas.width,s.canvas.height),_t.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:kt,disable:Tt,bindFramebuffer:Jt,drawBuffers:B,useProgram:si,setBlending:mt,setMaterial:we,setFlipSided:Ot,setCullFace:A,setLineWidth:b,setPolygonOffset:z,setScissorTest:tt,activeTexture:Q,bindTexture:et,unbindTexture:gt,compressedTexImage2D:ut,compressedTexImage3D:ft,texImage2D:yt,texImage3D:pt,updateUBOMapping:Re,uniformBlockBinding:Gt,texStorage2D:Xt,texStorage3D:Lt,texSubImage2D:Et,texSubImage3D:zt,compressedTexSubImage2D:K,compressedTexSubImage3D:re,scissor:Bt,viewport:ie,reset:ot}}function Ng(s,t,e,i,n,r,a){let o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):lo("canvas")}function x(A,b,z,tt){let Q=1;if((A.width>tt||A.height>tt)&&(Q=tt/Math.max(A.width,A.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let et=b?rl:Math.floor,gt=et(Q*A.width),ut=et(Q*A.height);u===void 0&&(u=g(gt,ut));let ft=z?g(gt,ut):u;return ft.width=gt,ft.height=ut,ft.getContext("2d").drawImage(A,0,0,gt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+gt+"x"+ut+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return oh(A.width)&&oh(A.height)}function p(A){return o?!1:A.wrapS!==Ii||A.wrapT!==Ii||A.minFilter!==Ve&&A.minFilter!==ui}function _(A,b){return A.generateMipmaps&&b&&A.minFilter!==Ve&&A.minFilter!==ui}function v(A){s.generateMipmap(A)}function M(A,b,z,tt,Q=!1){if(o===!1)return b;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=b;if(b===s.RED&&(z===s.FLOAT&&(et=s.R32F),z===s.HALF_FLOAT&&(et=s.R16F),z===s.UNSIGNED_BYTE&&(et=s.R8)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(et=s.R8UI),z===s.UNSIGNED_SHORT&&(et=s.R16UI),z===s.UNSIGNED_INT&&(et=s.R32UI),z===s.BYTE&&(et=s.R8I),z===s.SHORT&&(et=s.R16I),z===s.INT&&(et=s.R32I)),b===s.RG&&(z===s.FLOAT&&(et=s.RG32F),z===s.HALF_FLOAT&&(et=s.RG16F),z===s.UNSIGNED_BYTE&&(et=s.RG8)),b===s.RGBA){let gt=Q?so:te.getTransfer(tt);z===s.FLOAT&&(et=s.RGBA32F),z===s.HALF_FLOAT&&(et=s.RGBA16F),z===s.UNSIGNED_BYTE&&(et=gt===ce?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function R(A,b,z){return _(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==ui?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){return A===Ve||A===Cc||A===pa?s.NEAREST:s.LINEAR}function E(A){let b=A.target;b.removeEventListener("dispose",E),y(b),b.isVideoTexture&&h.delete(b)}function P(A){let b=A.target;b.removeEventListener("dispose",P),U(b)}function y(A){let b=i.get(A);if(b.__webglInit===void 0)return;let z=A.source,tt=d.get(z);if(tt){let Q=tt[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(A),Object.keys(tt).length===0&&d.delete(z)}i.remove(A)}function w(A){let b=i.get(A);s.deleteTexture(b.__webglTexture);let z=A.source,tt=d.get(z);delete tt[b.__cacheKey],a.memory.textures--}function U(A){let b=A.texture,z=i.get(A),tt=i.get(b);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(z.__webglFramebuffer[Q]))for(let et=0;et<z.__webglFramebuffer[Q].length;et++)s.deleteFramebuffer(z.__webglFramebuffer[Q][et]);else s.deleteFramebuffer(z.__webglFramebuffer[Q]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[Q])}else{if(Array.isArray(z.__webglFramebuffer))for(let Q=0;Q<z.__webglFramebuffer.length;Q++)s.deleteFramebuffer(z.__webglFramebuffer[Q]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,et=b.length;Q<et;Q++){let gt=i.get(b[Q]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),a.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(A)}let k=0;function Y(){k=0}function L(){let A=k;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),k+=1,A}function D(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function F(A,b){let z=i.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(z,A,b);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function G(A,b){let z=i.get(A);if(A.version>0&&z.__version!==A.version){ht(z,A,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function W(A,b){let z=i.get(A);if(A.version>0&&z.__version!==A.version){ht(z,A,b);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function q(A,b){let z=i.get(A);if(A.version>0&&z.__version!==A.version){_t(z,A,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}let Z={[er]:s.REPEAT,[Ii]:s.CLAMP_TO_EDGE,[el]:s.MIRRORED_REPEAT},J={[Ve]:s.NEAREST,[Cc]:s.NEAREST_MIPMAP_NEAREST,[pa]:s.NEAREST_MIPMAP_LINEAR,[ui]:s.LINEAR,[Rd]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},st={[zd]:s.NEVER,[qd]:s.ALWAYS,[Hd]:s.LESS,[pu]:s.LEQUAL,[Gd]:s.EQUAL,[Xd]:s.GEQUAL,[Vd]:s.GREATER,[Wd]:s.NOTEQUAL};function X(A,b,z){if(z?(s.texParameteri(A,s.TEXTURE_WRAP_S,Z[b.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Z[b.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Z[b.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,J[b.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,J[b.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Ii||b.wrapT!==Ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,T(b.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Ve&&b.minFilter!==ui&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,st[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ve||b.minFilter!==pa&&b.minFilter!==Yn||b.type===_n&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===vi&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(s.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function $(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));let tt=b.source,Q=d.get(tt);Q===void 0&&(Q={},d.set(tt,Q));let et=D(b);if(et!==A.__cacheKey){Q[et]===void 0&&(Q[et]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[et].usedTimes++;let gt=Q[A.__cacheKey];gt!==void 0&&(Q[A.__cacheKey].usedTimes--,gt.usedTimes===0&&w(b)),A.__cacheKey=et,A.__webglTexture=Q[et].texture}return z}function ht(A,b,z){let tt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=s.TEXTURE_3D);let Q=$(A,b),et=b.source;e.bindTexture(tt,A.__webglTexture,s.TEXTURE0+z);let gt=i.get(et);if(et.version!==gt.__version||Q===!0){e.activeTexture(s.TEXTURE0+z);let ut=te.getPrimaries(te.workingColorSpace),ft=b.colorSpace===Si?null:te.getPrimaries(b.colorSpace),Et=b.colorSpace===Si||ut===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let zt=p(b)&&m(b.image)===!1,K=x(b.image,zt,!1,n.maxTextureSize);K=Ot(b,K);let re=m(K)||o,Xt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),yt=M(b.internalFormat,Xt,Lt,b.colorSpace,b.isVideoTexture);X(tt,b,re);let pt,Bt=b.mipmaps,ie=o&&b.isVideoTexture!==!0&&yt!==uu,Re=gt.__version===void 0||Q===!0,Gt=R(b,K,re);if(b.isDepthTexture)yt=s.DEPTH_COMPONENT,o?b.type===_n?yt=s.DEPTH_COMPONENT32F:b.type===vn?yt=s.DEPTH_COMPONENT24:b.type===Wn?yt=s.DEPTH24_STENCIL8:yt=s.DEPTH_COMPONENT16:b.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Xn&&yt===s.DEPTH_COMPONENT&&b.type!==$l&&b.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=vn,Lt=r.convert(b.type)),b.format===As&&yt===s.DEPTH_COMPONENT&&(yt=s.DEPTH_STENCIL,b.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Wn,Lt=r.convert(b.type))),Re&&(ie?e.texStorage2D(s.TEXTURE_2D,1,yt,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,yt,K.width,K.height,0,Xt,Lt,null));else if(b.isDataTexture)if(Bt.length>0&&re){ie&&Re&&e.texStorage2D(s.TEXTURE_2D,Gt,yt,Bt[0].width,Bt[0].height);for(let ot=0,I=Bt.length;ot<I;ot++)pt=Bt[ot],ie?e.texSubImage2D(s.TEXTURE_2D,ot,0,0,pt.width,pt.height,Xt,Lt,pt.data):e.texImage2D(s.TEXTURE_2D,ot,yt,pt.width,pt.height,0,Xt,Lt,pt.data);b.generateMipmaps=!1}else ie?(Re&&e.texStorage2D(s.TEXTURE_2D,Gt,yt,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,Xt,Lt,K.data)):e.texImage2D(s.TEXTURE_2D,0,yt,K.width,K.height,0,Xt,Lt,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,yt,Bt[0].width,Bt[0].height,K.depth);for(let ot=0,I=Bt.length;ot<I;ot++)pt=Bt[ot],b.format!==xi?Xt!==null?ie?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,K.depth,Xt,pt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,yt,pt.width,pt.height,K.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,K.depth,Xt,Lt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,yt,pt.width,pt.height,K.depth,0,Xt,Lt,pt.data)}else{ie&&Re&&e.texStorage2D(s.TEXTURE_2D,Gt,yt,Bt[0].width,Bt[0].height);for(let ot=0,I=Bt.length;ot<I;ot++)pt=Bt[ot],b.format!==xi?Xt!==null?ie?e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,pt.width,pt.height,Xt,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,yt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage2D(s.TEXTURE_2D,ot,0,0,pt.width,pt.height,Xt,Lt,pt.data):e.texImage2D(s.TEXTURE_2D,ot,yt,pt.width,pt.height,0,Xt,Lt,pt.data)}else if(b.isDataArrayTexture)ie?(Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,yt,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Xt,Lt,K.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,K.width,K.height,K.depth,0,Xt,Lt,K.data);else if(b.isData3DTexture)ie?(Re&&e.texStorage3D(s.TEXTURE_3D,Gt,yt,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Xt,Lt,K.data)):e.texImage3D(s.TEXTURE_3D,0,yt,K.width,K.height,K.depth,0,Xt,Lt,K.data);else if(b.isFramebufferTexture){if(Re)if(ie)e.texStorage2D(s.TEXTURE_2D,Gt,yt,K.width,K.height);else{let ot=K.width,I=K.height;for(let lt=0;lt<Gt;lt++)e.texImage2D(s.TEXTURE_2D,lt,yt,ot,I,0,Xt,Lt,null),ot>>=1,I>>=1}}else if(Bt.length>0&&re){ie&&Re&&e.texStorage2D(s.TEXTURE_2D,Gt,yt,Bt[0].width,Bt[0].height);for(let ot=0,I=Bt.length;ot<I;ot++)pt=Bt[ot],ie?e.texSubImage2D(s.TEXTURE_2D,ot,0,0,Xt,Lt,pt):e.texImage2D(s.TEXTURE_2D,ot,yt,Xt,Lt,pt);b.generateMipmaps=!1}else ie?(Re&&e.texStorage2D(s.TEXTURE_2D,Gt,yt,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Xt,Lt,K)):e.texImage2D(s.TEXTURE_2D,0,yt,Xt,Lt,K);_(b,re)&&v(tt),gt.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function _t(A,b,z){if(b.image.length!==6)return;let tt=$(A,b),Q=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);let et=i.get(Q);if(Q.version!==et.__version||tt===!0){e.activeTexture(s.TEXTURE0+z);let gt=te.getPrimaries(te.workingColorSpace),ut=b.colorSpace===Si?null:te.getPrimaries(b.colorSpace),ft=b.colorSpace===Si||gt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Et=b.isCompressedTexture||b.image[0].isCompressedTexture,zt=b.image[0]&&b.image[0].isDataTexture,K=[];for(let ot=0;ot<6;ot++)!Et&&!zt?K[ot]=x(b.image[ot],!1,!0,n.maxCubemapSize):K[ot]=zt?b.image[ot].image:b.image[ot],K[ot]=Ot(b,K[ot]);let re=K[0],Xt=m(re)||o,Lt=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),pt=M(b.internalFormat,Lt,yt,b.colorSpace),Bt=o&&b.isVideoTexture!==!0,ie=et.__version===void 0||tt===!0,Re=R(b,re,Xt);X(s.TEXTURE_CUBE_MAP,b,Xt);let Gt;if(Et){Bt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Re,pt,re.width,re.height);for(let ot=0;ot<6;ot++){Gt=K[ot].mipmaps;for(let I=0;I<Gt.length;I++){let lt=Gt[I];b.format!==xi?Lt!==null?Bt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,0,0,lt.width,lt.height,Lt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,pt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,0,0,lt.width,lt.height,Lt,yt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,pt,lt.width,lt.height,0,Lt,yt,lt.data)}}}else{Gt=b.mipmaps,Bt&&ie&&(Gt.length>0&&Re++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Re,pt,K[0].width,K[0].height));for(let ot=0;ot<6;ot++)if(zt){Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,K[ot].width,K[ot].height,Lt,yt,K[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,pt,K[ot].width,K[ot].height,0,Lt,yt,K[ot].data);for(let I=0;I<Gt.length;I++){let ct=Gt[I].image[ot].image;Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,0,0,ct.width,ct.height,Lt,yt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,pt,ct.width,ct.height,0,Lt,yt,ct.data)}}else{Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Lt,yt,K[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,pt,Lt,yt,K[ot]);for(let I=0;I<Gt.length;I++){let lt=Gt[I];Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,0,0,Lt,yt,lt.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,pt,Lt,yt,lt.image[ot])}}}_(b,Xt)&&v(s.TEXTURE_CUBE_MAP),et.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function vt(A,b,z,tt,Q,et){let gt=r.convert(z.format,z.colorSpace),ut=r.convert(z.type),ft=M(z.internalFormat,gt,ut,z.colorSpace);if(!i.get(b).__hasExternalTextures){let zt=Math.max(1,b.width>>et),K=Math.max(1,b.height>>et);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,et,ft,zt,K,b.depth,0,gt,ut,null):e.texImage2D(Q,et,ft,zt,K,0,gt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),mt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Q,i.get(z).__webglTexture,0,It(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,Q,i.get(z).__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(A,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let tt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(z||mt(b)){let Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===_n?tt=s.DEPTH_COMPONENT32F:Q.type===vn&&(tt=s.DEPTH_COMPONENT24));let et=It(b);mt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,tt,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,et,tt,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,tt,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){let tt=It(b);z&&mt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,b.width,b.height):mt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{let tt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<tt.length;Q++){let et=tt[Q],gt=r.convert(et.format,et.colorSpace),ut=r.convert(et.type),ft=M(et.internalFormat,gt,ut,et.colorSpace),Et=It(b);z&&mt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,ft,b.width,b.height):mt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,ft,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ft,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);let tt=i.get(b.depthTexture).__webglTexture,Q=It(b);if(b.depthTexture.format===Xn)mt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(b.depthTexture.format===As)mt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Tt(A){let b=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");kt(b.__webglFramebuffer,A)}else if(z){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]=s.createRenderbuffer(),Nt(b.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Nt(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(A,b,z){let tt=i.get(A);b!==void 0&&vt(tt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Tt(A)}function B(A){let b=A.texture,z=i.get(A),tt=i.get(b);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=b.version,a.memory.textures++);let Q=A.isWebGLCubeRenderTarget===!0,et=A.isWebGLMultipleRenderTargets===!0,gt=m(A)||o;if(Q){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let ft=0;ft<b.mipmaps.length;ft++)z.__webglFramebuffer[ut][ft]=s.createFramebuffer()}else z.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)z.__webglFramebuffer[ut]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(et)if(n.drawBuffers){let ut=A.texture;for(let ft=0,Et=ut.length;ft<Et;ft++){let zt=i.get(ut[ft]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&mt(A)===!1){let ut=et?b:[b];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<ut.length;ft++){let Et=ut[ft];z.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);let zt=r.convert(Et.format,Et.colorSpace),K=r.convert(Et.type),re=M(Et.internalFormat,zt,K,Et.colorSpace,A.isXRRenderTarget===!0),Xt=It(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,re,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),X(s.TEXTURE_CUBE_MAP,b,gt);for(let ut=0;ut<6;ut++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)vt(z.__webglFramebuffer[ut][ft],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ft);else vt(z.__webglFramebuffer[ut],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);_(b,gt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let ut=A.texture;for(let ft=0,Et=ut.length;ft<Et;ft++){let zt=ut[ft],K=i.get(zt);e.bindTexture(s.TEXTURE_2D,K.__webglTexture),X(s.TEXTURE_2D,zt,gt),vt(z.__webglFramebuffer,A,zt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),_(zt,gt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ut=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,tt.__webglTexture),X(ut,b,gt),o&&b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)vt(z.__webglFramebuffer[ft],A,b,s.COLOR_ATTACHMENT0,ut,ft);else vt(z.__webglFramebuffer,A,b,s.COLOR_ATTACHMENT0,ut,0);_(b,gt)&&v(ut),e.unbindTexture()}A.depthBuffer&&Tt(A)}function si(A){let b=m(A)||o,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,Q=z.length;tt<Q;tt++){let et=z[tt];if(_(et,b)){let gt=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ut=i.get(et).__webglTexture;e.bindTexture(gt,ut),v(gt),e.unbindTexture()}}}function bt(A){if(o&&A.samples>0&&mt(A)===!1){let b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,tt=A.height,Q=s.COLOR_BUFFER_BIT,et=[],gt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=i.get(A),ft=A.isWebGLMultipleRenderTargets===!0;if(ft)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){et.push(s.COLOR_ATTACHMENT0+Et),A.depthBuffer&&et.push(gt);let zt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(zt===!1&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ft&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[Et]),zt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),ft){let K=i.get(b[Et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,z,tt,0,0,z,tt,Q,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,ut.__webglColorRenderbuffer[Et]);let zt=i.get(b[Et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function It(A){return Math.min(n.maxSamples,A.samples)}function mt(A){let b=i.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Ot(A,b){let z=A.colorSpace,tt=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===nl||z!==tn&&z!==Si&&(te.getTransfer(z)===ce?o===!1?t.has("EXT_sRGB")===!0&&tt===xi?(A.format=nl,A.minFilter=ui,A.generateMipmaps=!1):b=co.sRGBToLinear(b):(tt!==xi||Q!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=F,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=Jt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=si,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=mt}function Fg(s,t,e){let i=e.isWebGL2;function n(r,a=Si){let o,l=te.getTransfer(a);if(r===bn)return s.UNSIGNED_BYTE;if(r===ou)return s.UNSIGNED_SHORT_4_4_4_4;if(r===au)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cd)return s.BYTE;if(r===Pd)return s.SHORT;if(r===$l)return s.UNSIGNED_SHORT;if(r===ru)return s.INT;if(r===vn)return s.UNSIGNED_INT;if(r===_n)return s.FLOAT;if(r===vi)return i?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ld)return s.ALPHA;if(r===xi)return s.RGBA;if(r===Id)return s.LUMINANCE;if(r===Dd)return s.LUMINANCE_ALPHA;if(r===Xn)return s.DEPTH_COMPONENT;if(r===As)return s.DEPTH_STENCIL;if(r===nl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ud)return s.RED;if(r===lu)return s.RED_INTEGER;if(r===Nd)return s.RG;if(r===cu)return s.RG_INTEGER;if(r===hu)return s.RGBA_INTEGER;if(r===ma||r===ga||r===xa||r===va)if(l===ce)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ma)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ma)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ga)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pc||r===Lc||r===Ic||r===Dc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Pc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ic)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Uc||r===Nc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Uc)return l===ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Nc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fc||r===kc||r===Bc||r===Oc||r===zc||r===Hc||r===Gc||r===Vc||r===Wc||r===Xc||r===qc||r===Yc||r===Zc||r===$c)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Fc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Oc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zc)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$c)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_a||r===Jc||r===Kc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===_a)return l===ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fd||r===jc||r===Qc||r===th)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===_a)return o.COMPRESSED_RED_RGTC1_EXT;if(r===jc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===th)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wn?i?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}var vl=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},De=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},kg={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new De;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_l=class extends En{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),m=null,p=null,_=[],v=[],M=new j,R=null,T=new je;T.layers.enable(1),T.viewport=new be;let E=new je;E.layers.enable(2),E.viewport=new be;let P=[T,E],y=new vl;y.layers.enable(1),y.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=_[X];return $===void 0&&($=new js,_[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=_[X];return $===void 0&&($=new js,_[X]=$),$.getGripSpace()},this.getHand=function(X){let $=_[X];return $===void 0&&($=new js,_[X]=$),$.getHandSpace()};function k(X){let $=v.indexOf(X.inputSource);if($===-1)return;let ht=_[$];ht!==void 0&&(ht.update(X.inputSource,X.frame,c||a),ht.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",L);for(let X=0;X<_.length;X++){let $=v[X];$!==null&&(v[X]=null,_[X].disconnect($))}w=null,U=null,t.setRenderTarget(m),f=null,d=null,u=null,n=null,p=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(M),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:n.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,$),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Xe(f.framebufferWidth,f.framebufferHeight,{format:xi,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,ht=null,_t=null;x.depth&&(_t=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=x.stencil?As:Xn,ht=x.stencil?Wn:vn);let vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(vt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Xe(d.textureWidth,d.textureHeight,{format:xi,type:bn,depthTexture:new yo(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Nt=t.properties.get(p);Nt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),st.setContext(n),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(X){for(let $=0;$<X.removed.length;$++){let ht=X.removed[$],_t=v.indexOf(ht);_t>=0&&(v[_t]=null,_[_t].disconnect(ht))}for(let $=0;$<X.added.length;$++){let ht=X.added[$],_t=v.indexOf(ht);if(_t===-1){for(let Nt=0;Nt<_.length;Nt++)if(Nt>=v.length){v.push(ht),_t=Nt;break}else if(v[Nt]===null){v[Nt]=ht,_t=Nt;break}if(_t===-1)break}let vt=_[_t];vt&&vt.connect(ht)}}let D=new C,F=new C;function G(X,$,ht){D.setFromMatrixPosition($.matrixWorld),F.setFromMatrixPosition(ht.matrixWorld);let _t=D.distanceTo(F),vt=$.projectionMatrix.elements,Nt=ht.projectionMatrix.elements,kt=vt[14]/(vt[10]-1),Tt=vt[14]/(vt[10]+1),Jt=(vt[9]+1)/vt[5],B=(vt[9]-1)/vt[5],si=(vt[8]-1)/vt[0],bt=(Nt[8]+1)/Nt[0],It=kt*si,mt=kt*bt,we=_t/(-si+bt),Ot=we*-si;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ot),X.translateZ(we),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let A=kt+we,b=Tt+we,z=It-Ot,tt=mt+(_t-Ot),Q=Jt*Tt/b*A,et=B*Tt/b*A;X.projectionMatrix.makePerspective(z,tt,Q,et,A,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function W(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;y.near=E.near=T.near=X.near,y.far=E.far=T.far=X.far,(w!==y.near||U!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,U=y.far);let $=X.parent,ht=y.cameras;W(y,$);for(let _t=0;_t<ht.length;_t++)W(ht[_t],$);ht.length===2?G(y,T,E):y.projectionMatrix.copy(T.projectionMatrix),q(X,y,$)};function q(X,$,ht){ht===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(ht.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let Z=null;function J(X,$){if(h=$.getViewerPose(c||a),g=$,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let _t=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,_t=!0);for(let vt=0;vt<ht.length;vt++){let Nt=ht[vt],kt=null;if(f!==null)kt=f.getViewport(Nt);else{let Jt=u.getViewSubImage(d,Nt);kt=Jt.viewport,vt===0&&(t.setRenderTargetTextures(p,Jt.colorTexture,d.ignoreDepthValues?void 0:Jt.depthStencilTexture),t.setRenderTarget(p))}let Tt=P[vt];Tt===void 0&&(Tt=new je,Tt.layers.enable(vt),Tt.viewport=new be,P[vt]=Tt),Tt.matrix.fromArray(Nt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Nt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(kt.x,kt.y,kt.width,kt.height),vt===0&&(y.matrix.copy(Tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_t===!0&&y.cameras.push(Tt)}}for(let ht=0;ht<_.length;ht++){let _t=v[ht],vt=_[ht];_t!==null&&vt!==void 0&&vt.update(_t,$,c||a)}Z&&Z(X,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let st=new vu;st.setAnimationLoop(J),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}};function Bg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,xu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Og(s,t,e,i){let n={},r={},a=[],o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){let M=v.program;i.uniformBlockBinding(_,M)}function c(_,v){let M=n[_.id];M===void 0&&(g(_),M=h(_),n[_.id]=M,_.addEventListener("dispose",m));let R=v.program;i.updateUBOMapping(_,R);let T=t.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){let v=u();_.__bindingPointIndex=v;let M=s.createBuffer(),R=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=n[_.id],M=_.uniforms,R=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,E=M.length;T<E;T++){let P=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,w=P.length;y<w;y++){let U=P[y];if(f(U,T,y,R)===!0){let k=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value],L=0;for(let D=0;D<Y.length;D++){let F=Y[D],G=x(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,k+L,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,v,M,R){let T=_.value,E=v+"_"+M;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{let P=R[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(_){let v=_.uniforms,M=0,R=16;for(let E=0,P=v.length;E<P;E++){let y=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,U=y.length;w<U;w++){let k=y[w],Y=Array.isArray(k.value)?k.value:[k.value];for(let L=0,D=Y.length;L<D;L++){let F=Y[L],G=x(F),W=M%R;W!==0&&R-W<G.boundary&&(M+=R-W),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=G.storage}}}let T=M%R;return T>0&&(M+=R-T),_.__size=M,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function p(){for(let _ in n)s.deleteBuffer(n[_]);a=[],n={},r={}}return{bind:l,update:c,dispose:p}}var nr=class{constructor(t={}){let{canvas:e=Zd(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this._useLegacyLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;let v=this,M=!1,R=0,T=0,E=null,P=-1,y=null,w=new be,U=new be,k=null,Y=new Mt(0),L=0,D=e.width,F=e.height,G=1,W=null,q=null,Z=new be(0,0,D,F),J=new be(0,0,D,F),st=!1,X=new ir,$=!1,ht=!1,_t=null,vt=new Kt,Nt=new j,kt=new C,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Jt(){return E===null?G:1}let B=i;function si(S,N){for(let H=0;H<S.length;H++){let V=S[H],O=e.getContext(V,N);if(O!==null)return O}return null}try{let S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",lt,!1),B===null){let N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),B=si(N,S),B===null)throw si(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let bt,It,mt,we,Ot,A,b,z,tt,Q,et,gt,ut,ft,Et,zt,K,re,Xt,Lt,yt,pt,Bt,ie;function Re(){bt=new s0(B),It=new jm(B,bt,t),bt.init(It),pt=new Fg(B,bt,It),mt=new Ug(B,bt,It),we=new a0(B),Ot=new bg,A=new Ng(B,bt,mt,Ot,It,pt,we),b=new t0(v),z=new n0(v),tt=new mf(B,It),Bt=new Jm(B,bt,tt,It),Q=new r0(B,tt,we,Bt),et=new u0(B,Q,tt,we),Xt=new h0(B,It,A),zt=new Qm(Ot),gt=new Mg(v,b,z,bt,It,Bt,zt),ut=new Bg(v,Ot),ft=new Sg,Et=new Pg(bt,It),re=new $m(v,b,z,mt,et,d,l),K=new Dg(v,et,It),ie=new Og(B,we,It,mt),Lt=new Km(B,bt,we,It),yt=new o0(B,bt,we,It),we.programs=gt.programs,v.capabilities=It,v.extensions=bt,v.properties=Ot,v.renderLists=ft,v.shadowMap=K,v.state=mt,v.info=we}Re();let Gt=new _l(v,B);this.xr=Gt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=bt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=bt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(D,F,!1))},this.getSize=function(S){return S.set(D,F)},this.setSize=function(S,N,H=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=S,F=N,e.width=Math.floor(S*G),e.height=Math.floor(N*G),H===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(D*G,F*G).floor()},this.setDrawingBufferSize=function(S,N,H){D=S,F=N,G=H,e.width=Math.floor(S*H),e.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,N,H,V){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,N,H,V),mt.viewport(w.copy(Z).multiplyScalar(G).floor())},this.getScissor=function(S){return S.copy(J)},this.setScissor=function(S,N,H,V){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,N,H,V),mt.scissor(U.copy(J).multiplyScalar(G).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){mt.setScissorTest(st=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){q=S},this.getClearColor=function(S){return S.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(S=!0,N=!0,H=!0){let V=0;if(S){let O=!1;if(E!==null){let dt=E.texture.format;O=dt===hu||dt===cu||dt===lu}if(O){let dt=E.texture.type,xt=dt===bn||dt===vn||dt===$l||dt===Wn||dt===ou||dt===au,St=re.getClearColor(),Ct=re.getClearAlpha(),Ht=St.r,Dt=St.g,Ft=St.b;xt?(f[0]=Ht,f[1]=Dt,f[2]=Ft,f[3]=Ct,B.clearBufferuiv(B.COLOR,0,f)):(g[0]=Ht,g[1]=Dt,g[2]=Ft,g[3]=Ct,B.clearBufferiv(B.COLOR,0,g))}else V|=B.COLOR_BUFFER_BIT}N&&(V|=B.DEPTH_BUFFER_BIT),H&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Et.dispose(),Ot.dispose(),b.dispose(),z.dispose(),et.dispose(),Bt.dispose(),ie.dispose(),gt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",ri),Gt.removeEventListener("sessionend",me),_t&&(_t.dispose(),_t=null),oi.stop()};function ot(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let S=we.autoReset,N=K.enabled,H=K.autoUpdate,V=K.needsUpdate,O=K.type;Re(),we.autoReset=S,K.enabled=N,K.autoUpdate=H,K.needsUpdate=V,K.type=O}function lt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ct(S){let N=S.target;N.removeEventListener("dispose",ct),At(N)}function At(S){wt(S),Ot.remove(S)}function wt(S){let N=Ot.get(S).programs;N!==void 0&&(N.forEach(function(H){gt.releaseProgram(H)}),S.isShaderMaterial&&gt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,V,O,dt){N===null&&(N=Tt);let xt=O.isMesh&&O.matrixWorld.determinant()<0,St=Ju(S,N,H,V,O);mt.setMaterial(V,xt);let Ct=H.index,Ht=1;if(V.wireframe===!0){if(Ct=Q.getWireframeAttribute(H),Ct===void 0)return;Ht=2}let Dt=H.drawRange,Ft=H.attributes.position,Ie=Dt.start*Ht,pi=(Dt.start+Dt.count)*Ht;dt!==null&&(Ie=Math.max(Ie,dt.start*Ht),pi=Math.min(pi,(dt.start+dt.count)*Ht)),Ct!==null?(Ie=Math.max(Ie,0),pi=Math.min(pi,Ct.count)):Ft!=null&&(Ie=Math.max(Ie,0),pi=Math.min(pi,Ft.count));let ze=pi-Ie;if(ze<0||ze===1/0)return;Bt.setup(O,V,St,H,Ct);let Wi,Se=Lt;if(Ct!==null&&(Wi=tt.get(Ct),Se=yt,Se.setIndex(Wi)),O.isMesh)V.wireframe===!0?(mt.setLineWidth(V.wireframeLinewidth*Jt()),Se.setMode(B.LINES)):Se.setMode(B.TRIANGLES);else if(O.isLine){let Vt=V.linewidth;Vt===void 0&&(Vt=1),mt.setLineWidth(Vt*Jt()),O.isLineSegments?Se.setMode(B.LINES):O.isLineLoop?Se.setMode(B.LINE_LOOP):Se.setMode(B.LINE_STRIP)}else O.isPoints?Se.setMode(B.POINTS):O.isSprite&&Se.setMode(B.TRIANGLES);if(O.isBatchedMesh)Se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Se.renderInstances(Ie,ze,O.count);else if(H.isInstancedBufferGeometry){let Vt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ha=Math.min(H.instanceCount,Vt);Se.renderInstances(Ie,ze,ha)}else Se.render(Ie,ze)};function fe(S,N,H){S.transparent===!0&&S.side===ge&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,Sr(S,N,H),S.side=Sn,S.needsUpdate=!0,Sr(S,N,H),S.side=ge):Sr(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),m=Et.get(H),m.init(),_.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),S!==H&&S.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(v._useLegacyLights);let V=new Set;return S.traverse(function(O){let dt=O.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){let St=dt[xt];fe(St,H,O),V.add(St)}else fe(dt,H,O),V.add(dt)}),_.pop(),m=null,V},this.compileAsync=function(S,N,H=null){let V=this.compile(S,N,H);return new Promise(O=>{function dt(){if(V.forEach(function(xt){Ot.get(xt).currentProgram.isReady()&&V.delete(xt)}),V.size===0){O(S);return}setTimeout(dt,10)}bt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let pe=null;function Oe(S){pe&&pe(S)}function ri(){oi.stop()}function me(){oi.start()}let oi=new vu;oi.setAnimationLoop(Oe),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(S){pe=S,Gt.setAnimationLoop(S),S===null?oi.stop():oi.start()},Gt.addEventListener("sessionstart",ri),Gt.addEventListener("sessionend",me),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(N),N=Gt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,E),m=Et.get(S,_.length),m.init(),_.push(m),vt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(vt),ht=this.localClippingEnabled,$=zt.init(this.clippingPlanes,ht),x=ft.get(S,p.length),x.init(),p.push(x),Bi(S,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,q),this.info.render.frame++,$===!0&&zt.beginShadows();let H=m.state.shadowsArray;if(K.render(H,S,N),$===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(x,S),m.setupLights(v._useLegacyLights),N.isArrayCamera){let V=N.cameras;for(let O=0,dt=V.length;O<dt;O++){let xt=V[O];vc(x,S,xt,xt.viewport)}}else vc(x,S,N);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(v,S,N),Bt.resetDefaultState(),P=-1,y=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Bi(S,N,H,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){V&&kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(vt);let xt=et.update(S),St=S.material;St.visible&&x.push(S,xt,St,H,kt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){let xt=et.update(S),St=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),kt.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),kt.copy(xt.boundingSphere.center)),kt.applyMatrix4(S.matrixWorld).applyMatrix4(vt)),Array.isArray(St)){let Ct=xt.groups;for(let Ht=0,Dt=Ct.length;Ht<Dt;Ht++){let Ft=Ct[Ht],Ie=St[Ft.materialIndex];Ie&&Ie.visible&&x.push(S,xt,Ie,H,kt.z,Ft)}}else St.visible&&x.push(S,xt,St,H,kt.z,null)}}let dt=S.children;for(let xt=0,St=dt.length;xt<St;xt++)Bi(dt[xt],N,H,V)}function vc(S,N,H,V){let O=S.opaque,dt=S.transmissive,xt=S.transparent;m.setupLightsView(H),$===!0&&zt.setGlobalState(v.clippingPlanes,H),dt.length>0&&$u(O,dt,N,H),V&&mt.viewport(w.copy(V)),O.length>0&&wr(O,N,H),dt.length>0&&wr(dt,N,H),xt.length>0&&wr(xt,N,H),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function $u(S,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let dt=It.isWebGL2;_t===null&&(_t=new Xe(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?vi:bn,minFilter:Yn,samples:dt?4:0})),v.getDrawingBufferSize(Nt),dt?_t.setSize(Nt.x,Nt.y):_t.setSize(rl(Nt.x),rl(Nt.y));let xt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(Y),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let St=v.toneMapping;v.toneMapping=Mn,wr(S,H,V),A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t);let Ct=!1;for(let Ht=0,Dt=N.length;Ht<Dt;Ht++){let Ft=N[Ht],Ie=Ft.object,pi=Ft.geometry,ze=Ft.material,Wi=Ft.group;if(ze.side===ge&&Ie.layers.test(V.layers)){let Se=ze.side;ze.side=Ge,ze.needsUpdate=!0,_c(Ie,H,V,pi,ze,Wi),ze.side=Se,ze.needsUpdate=!0,Ct=!0}}Ct===!0&&(A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t)),v.setRenderTarget(xt),v.setClearColor(Y,L),v.toneMapping=St}function wr(S,N,H){let V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,dt=S.length;O<dt;O++){let xt=S[O],St=xt.object,Ct=xt.geometry,Ht=V===null?xt.material:V,Dt=xt.group;St.layers.test(H.layers)&&_c(St,N,H,Ct,Ht,Dt)}}function _c(S,N,H,V,O,dt){S.onBeforeRender(v,N,H,V,O,dt),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(v,N,H,V,S,dt),O.transparent===!0&&O.side===ge&&O.forceSinglePass===!1?(O.side=Ge,O.needsUpdate=!0,v.renderBufferDirect(H,N,V,O,S,dt),O.side=Sn,O.needsUpdate=!0,v.renderBufferDirect(H,N,V,O,S,dt),O.side=ge):v.renderBufferDirect(H,N,V,O,S,dt),S.onAfterRender(v,N,H,V,O,dt)}function Sr(S,N,H){N.isScene!==!0&&(N=Tt);let V=Ot.get(S),O=m.state.lights,dt=m.state.shadowsArray,xt=O.state.version,St=gt.getParameters(S,O.state,dt,N,H),Ct=gt.getProgramCacheKey(St),Ht=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?z:b).get(S.envMap||V.environment),Ht===void 0&&(S.addEventListener("dispose",ct),Ht=new Map,V.programs=Ht);let Dt=Ht.get(Ct);if(Dt!==void 0){if(V.currentProgram===Dt&&V.lightsStateVersion===xt)return Mc(S,St),Dt}else St.uniforms=gt.getUniforms(S),S.onBuild(H,St,v),S.onBeforeCompile(St,v),Dt=gt.acquireProgram(St,Ct),Ht.set(Ct,Dt),V.uniforms=St.uniforms;let Ft=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ft.clippingPlanes=zt.uniform),Mc(S,St),V.needsLights=ju(S),V.lightsStateVersion=xt,V.needsLights&&(Ft.ambientLightColor.value=O.state.ambient,Ft.lightProbe.value=O.state.probe,Ft.directionalLights.value=O.state.directional,Ft.directionalLightShadows.value=O.state.directionalShadow,Ft.spotLights.value=O.state.spot,Ft.spotLightShadows.value=O.state.spotShadow,Ft.rectAreaLights.value=O.state.rectArea,Ft.ltc_1.value=O.state.rectAreaLTC1,Ft.ltc_2.value=O.state.rectAreaLTC2,Ft.pointLights.value=O.state.point,Ft.pointLightShadows.value=O.state.pointShadow,Ft.hemisphereLights.value=O.state.hemi,Ft.directionalShadowMap.value=O.state.directionalShadowMap,Ft.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ft.spotShadowMap.value=O.state.spotShadowMap,Ft.spotLightMatrix.value=O.state.spotLightMatrix,Ft.spotLightMap.value=O.state.spotLightMap,Ft.pointShadowMap.value=O.state.pointShadowMap,Ft.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Dt,V.uniformsList=null,Dt}function yc(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Ss.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Mc(S,N){let H=Ot.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Ju(S,N,H,V,O){N.isScene!==!0&&(N=Tt),A.resetTextureUnits();let dt=N.fog,xt=V.isMeshStandardMaterial?N.environment:null,St=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:tn,Ct=(V.isMeshStandardMaterial?z:b).get(V.envMap||xt),Ht=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Dt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ft=!!H.morphAttributes.position,Ie=!!H.morphAttributes.normal,pi=!!H.morphAttributes.color,ze=Mn;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ze=v.toneMapping);let Wi=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Se=Wi!==void 0?Wi.length:0,Vt=Ot.get(V),ha=m.state.lights;if($===!0&&(ht===!0||S!==y)){let bi=S===y&&V.id===P;zt.setState(V,S,bi)}let Ce=!1;V.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ha.state.version||Vt.outputColorSpace!==St||O.isBatchedMesh&&Vt.batching===!1||!O.isBatchedMesh&&Vt.batching===!0||O.isInstancedMesh&&Vt.instancing===!1||!O.isInstancedMesh&&Vt.instancing===!0||O.isSkinnedMesh&&Vt.skinning===!1||!O.isSkinnedMesh&&Vt.skinning===!0||O.isInstancedMesh&&Vt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Vt.instancingColor===!1&&O.instanceColor!==null||Vt.envMap!==Ct||V.fog===!0&&Vt.fog!==dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==zt.numPlanes||Vt.numIntersection!==zt.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Dt||Vt.morphTargets!==Ft||Vt.morphNormals!==Ie||Vt.morphColors!==pi||Vt.toneMapping!==ze||It.isWebGL2===!0&&Vt.morphTargetsCount!==Se)&&(Ce=!0):(Ce=!0,Vt.__version=V.version);let Un=Vt.currentProgram;Ce===!0&&(Un=Sr(V,N,O));let bc=!1,zs=!1,ua=!1,$e=Un.getUniforms(),Nn=Vt.uniforms;if(mt.useProgram(Un.program)&&(bc=!0,zs=!0,ua=!0),V.id!==P&&(P=V.id,zs=!0),bc||y!==S){$e.setValue(B,"projectionMatrix",S.projectionMatrix),$e.setValue(B,"viewMatrix",S.matrixWorldInverse);let bi=$e.map.cameraPosition;bi!==void 0&&bi.setValue(B,kt.setFromMatrixPosition(S.matrixWorld)),It.logarithmicDepthBuffer&&$e.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&$e.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,zs=!0,ua=!0)}if(O.isSkinnedMesh){$e.setOptional(B,O,"bindMatrix"),$e.setOptional(B,O,"bindMatrixInverse");let bi=O.skeleton;bi&&(It.floatVertexTextures?(bi.boneTexture===null&&bi.computeBoneTexture(),$e.setValue(B,"boneTexture",bi.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&($e.setOptional(B,O,"batchingTexture"),$e.setValue(B,"batchingTexture",O._matricesTexture,A));let da=H.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0&&It.isWebGL2===!0)&&Xt.update(O,H,Un),(zs||Vt.receiveShadow!==O.receiveShadow)&&(Vt.receiveShadow=O.receiveShadow,$e.setValue(B,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Nn.envMap.value=Ct,Nn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),zs&&($e.setValue(B,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Ku(Nn,ua),dt&&V.fog===!0&&ut.refreshFogUniforms(Nn,dt),ut.refreshMaterialUniforms(Nn,V,G,F,_t),Ss.upload(B,yc(Vt),Nn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ss.upload(B,yc(Vt),Nn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&$e.setValue(B,"center",O.center),$e.setValue(B,"modelViewMatrix",O.modelViewMatrix),$e.setValue(B,"normalMatrix",O.normalMatrix),$e.setValue(B,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let bi=V.uniformsGroups;for(let fa=0,Qu=bi.length;fa<Qu;fa++)if(It.isWebGL2){let wc=bi[fa];ie.update(wc,Un),ie.bind(wc,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function Ku(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function ju(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,N,H){Ot.get(S.texture).__webglTexture=N,Ot.get(S.depthTexture).__webglTexture=H;let V=Ot.get(S);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){let H=Ot.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){E=S,R=N,T=H;let V=!0,O=null,dt=!1,xt=!1;if(S){let Ct=Ot.get(S);Ct.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(B.FRAMEBUFFER,null),V=!1):Ct.__webglFramebuffer===void 0?A.setupRenderTarget(S):Ct.__hasExternalTextures&&A.rebindTextures(S,Ot.get(S.texture).__webglTexture,Ot.get(S.depthTexture).__webglTexture);let Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(xt=!0);let Dt=Ot.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?O=Dt[N][H]:O=Dt[N],dt=!0):It.isWebGL2&&S.samples>0&&A.useMultisampledRTT(S)===!1?O=Ot.get(S).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[H]:O=Dt,w.copy(S.viewport),U.copy(S.scissor),k=S.scissorTest}else w.copy(Z).multiplyScalar(G).floor(),U.copy(J).multiplyScalar(G).floor(),k=st;if(mt.bindFramebuffer(B.FRAMEBUFFER,O)&&It.drawBuffers&&V&&mt.drawBuffers(S,O),mt.viewport(w),mt.scissor(U),mt.setScissorTest(k),dt){let Ct=Ot.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,H)}else if(xt){let Ct=Ot.get(S.texture),Ht=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,H||0,Ht)}P=-1},this.readRenderTargetPixels=function(S,N,H,V,O,dt,xt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ot.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){mt.bindFramebuffer(B.FRAMEBUFFER,St);try{let Ct=S.texture,Ht=Ct.format,Dt=Ct.type;if(Ht!==xi&&pt.convert(Ht)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ft=Dt===vi&&(bt.has("EXT_color_buffer_half_float")||It.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Dt!==bn&&pt.convert(Dt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===_n&&(It.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&H>=0&&H<=S.height-O&&B.readPixels(N,H,V,O,pt.convert(Ht),pt.convert(Dt),dt)}finally{let Ct=E!==null?Ot.get(E).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(S,N,H=0){let V=Math.pow(2,-H),O=Math.floor(N.image.width*V),dt=Math.floor(N.image.height*V);A.setTexture2D(N,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,S.x,S.y,O,dt),mt.unbindTexture()},this.copyTextureToTexture=function(S,N,H,V=0){let O=N.image.width,dt=N.image.height,xt=pt.convert(H.format),St=pt.convert(H.type);A.setTexture2D(H,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,V,S.x,S.y,O,dt,xt,St,N.image.data):N.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,V,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,xt,N.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,V,S.x,S.y,xt,St,N.image),V===0&&H.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,H,V,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let dt=S.max.x-S.min.x+1,xt=S.max.y-S.min.y+1,St=S.max.z-S.min.z+1,Ct=pt.convert(V.format),Ht=pt.convert(V.type),Dt;if(V.isData3DTexture)A.setTexture3D(V,0),Dt=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),Dt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);let Ft=B.getParameter(B.UNPACK_ROW_LENGTH),Ie=B.getParameter(B.UNPACK_IMAGE_HEIGHT),pi=B.getParameter(B.UNPACK_SKIP_PIXELS),ze=B.getParameter(B.UNPACK_SKIP_ROWS),Wi=B.getParameter(B.UNPACK_SKIP_IMAGES),Se=H.isCompressedTexture?H.mipmaps[O]:H.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,S.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,S.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?B.texSubImage3D(Dt,O,N.x,N.y,N.z,dt,xt,St,Ct,Ht,Se.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Dt,O,N.x,N.y,N.z,dt,xt,St,Ct,Se.data)):B.texSubImage3D(Dt,O,N.x,N.y,N.z,dt,xt,St,Ct,Ht,Se),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ft),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pi),B.pixelStorei(B.UNPACK_SKIP_ROWS,ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Wi),O===0&&V.generateMipmaps&&B.generateMipmap(Dt),mt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),mt.unbindTexture()},this.resetState=function(){R=0,T=0,E=null,mt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Jl?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Oo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pe?qn:du}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qn?Pe:tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},yl=class extends nr{};yl.prototype.isWebGL1Renderer=!0;var Mo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var bo=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},wo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ai=new C,sr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix4(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyNormalMatrix(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.transformDirection(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ji(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ji(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ji(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ji(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new _e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ps=class extends nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gs,Xs=new C,xs=new C,vs=new C,_s=new j,qs=new j,Su=new Kt,Yr=new C,Ys=new C,Zr=new C,Wh=new j,Xa=new j,Xh=new j,Ui=class extends qe{constructor(t=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wo(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new sr(i,3,0,!1)),gs.setAttribute("uv",new sr(i,2,3,!1))}this.geometry=gs,this.material=t,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;$r(Yr.set(-.5,-.5,0),vs,a,xs,n,r),$r(Ys.set(.5,-.5,0),vs,a,xs,n,r),$r(Zr.set(.5,.5,0),vs,a,xs,n,r),Wh.set(0,0),Xa.set(1,0),Xh.set(1,1);let o=t.ray.intersectTriangle(Yr,Ys,Zr,!1,Xs);if(o===null&&($r(Ys.set(-.5,.5,0),vs,a,xs,n,r),Xa.set(0,1),o=t.ray.intersectTriangle(Yr,Zr,Ys,!1,Xs),o===null))return;let l=t.ray.origin.distanceTo(Xs);l<t.near||l>t.far||e.push({distance:l,point:Xs.clone(),uv:Vn.getInterpolation(Xs,Yr,Ys,Zr,Wh,Xa,Xh,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $r(s,t,e,i,n,r){_s.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(qs.x=r*_s.x-n*_s.y,qs.y=n*_s.x+r*_s.y):qs.copy(_s),s.copy(t),s.x+=qs.x,s.y+=qs.y,s.applyMatrix4(Su)}var So=class extends _i{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Ve,h=Ve,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rr=class extends _e{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new Kt,qh=new Kt,Jr=[],Yh=new en,zg=new Kt,Zs=new ue,$s=new Tn,Ls=class extends ue{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,zg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new en),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ys),Yh.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(Yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ys),$s.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ys),qh.multiplyMatrices(i,ys),Zs.matrixWorld=qh,Zs.raycast(t,Jr);for(let a=0,o=Jr.length;a<o;a++){let l=Jr[a];l.instanceId=r,l.object=this,e.push(l)}Jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ml=class extends nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zh=new Kt,bl=new fo,Kr=new Tn,jr=new C,Eo=class extends qe{constructor(t=new Ee,e=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(n),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Zh.copy(n).invert(),bl.copy(t.ray).applyMatrix4(Zh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);jr.fromBufferAttribute(u,m),$h(jr,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)jr.fromBufferAttribute(u,g),$h(jr,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $h(s,t,e,i,n,r,a){let o=bl.distanceSqToPoint(s);if(o<e){let l=new C;bl.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var To=class extends _i{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new j:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,n=[],r=[],a=[],o=new C,l=new Kt;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(We(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},or=class extends Ei{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let i=e||new j,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},wl=class extends or{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var Qr=new C,qa=new jl,Ya=new jl,Za=new jl,Sl=class extends Ei{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Qr.subVectors(n[0],n[1]).add(n[0]),c=Qr);let u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(Qr.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),qa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Ya.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Za.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ya.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Za.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(qa.calc(l),Ya.calc(l),Za.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Jh(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function Hg(s,t){let e=1-s;return e*e*t}function Gg(s,t){return 2*(1-s)*s*t}function Vg(s,t){return s*s*t}function Qs(s,t,e,i){return Hg(s,t)+Gg(s,e)+Vg(s,i)}function Wg(s,t){let e=1-s;return e*e*e*t}function Xg(s,t){let e=1-s;return 3*e*e*s*t}function qg(s,t){return 3*(1-s)*s*s*t}function Yg(s,t){return s*s*s*t}function tr(s,t,e,i,n){return Wg(s,t)+Xg(s,e)+qg(s,i)+Yg(s,n)}var Ao=class extends Ei{constructor(t=new j,e=new j,i=new j,n=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new j){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(tr(t,n.x,r.x,a.x,o.x),tr(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},El=class extends Ei{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(tr(t,n.x,r.x,a.x,o.x),tr(t,n.y,r.y,a.y,o.y),tr(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ro=class extends Ei{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tl=class extends Ei{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends Ei{constructor(t=new j,e=new j,i=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new j){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Qs(t,n.x,r.x,a.x),Qs(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Al=class extends Ei{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Qs(t,n.x,r.x,a.x),Qs(t,n.y,r.y,a.y),Qs(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Jh(o,l.x,c.x,h.x,u.x),Jh(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new j().fromArray(n))}return this}},Kh=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:Sl,CubicBezierCurve:Ao,CubicBezierCurve3:El,EllipseCurve:or,LineCurve:Ro,LineCurve3:Tl,QuadraticBezierCurve:Co,QuadraticBezierCurve3:Al,SplineCurve:Po}),Rl=class extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Kh[n.type]().fromJSON(n))}return this}},Cl=class extends Rl{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ro(this.currentPoint.clone(),new j(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Co(this.currentPoint.clone(),new j(t,e),new j(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new Ao(this.currentPoint.clone(),new j(t,e),new j(i,n),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Po(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new or(t,e,i,n,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rn=class s extends Ee{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=We(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new j,f=new C,g=new C,x=new C,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){let v=i+_*h*n,M=Math.sin(v),R=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=_/e,d.y=T/(t.length-1),o.push(d.x,d.y);let E=l[3*T+0]*M,P=l[3*T+1],y=l[3*T+0]*R;c.push(E,P,y)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let M=v+_*t.length,R=M,T=M+t.length,E=M+t.length+1,P=M+1;r.push(R,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("uv",new $t(o,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Cn=class s extends Rn{constructor(t=1,e=1,i=4,n=8){let r=new Cl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Zn=class s extends Ee{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qt=class s extends Ee{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(f,2));function _(){let M=new C,R=new C,T=0,E=(e-t)/i;for(let P=0;P<=r;P++){let y=[],w=P/r,U=w*(e-t)+t;for(let k=0;k<=n;k++){let Y=k/n,L=Y*l+o,D=Math.sin(L),F=Math.cos(L);R.x=U*D,R.y=-w*i+m,R.z=U*F,u.push(R.x,R.y,R.z),M.set(D,E,F).normalize(),d.push(M.x,M.y,M.z),f.push(Y,1-w),y.push(g++)}x.push(y)}for(let P=0;P<n;P++)for(let y=0;y<r;y++){let w=x[y][P],U=x[y+1][P],k=x[y+1][P+1],Y=x[y][P+1];h.push(w,U,Y),h.push(U,k,Y),T+=6}c.addGroup(p,T,0),p+=T}function v(M){let R=g,T=new j,E=new C,P=0,y=M===!0?t:e,w=M===!0?1:-1;for(let k=1;k<=n;k++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let U=g;for(let k=0;k<=n;k++){let L=k/n*l+o,D=Math.cos(L),F=Math.sin(L);E.x=y*F,E.y=m*w,E.z=y*D,u.push(E.x,E.y,E.z),d.push(0,w,0),T.x=D*.5+.5,T.y=F*.5*w+.5,f.push(T.x,T.y),g++}for(let k=0;k<n;k++){let Y=R+k,L=U+k;M===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ti=class s extends qt{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pl=class s extends Ee{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new C,M=new C,R=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],M),f(e[T+2],R),l(v,M,R,_)}function l(_,v,M,R){let T=R+1,E=[];for(let P=0;P<=T;P++){E[P]=[];let y=_.clone().lerp(M,P/T),w=v.clone().lerp(M,P/T),U=T-P;for(let k=0;k<=U;k++)k===0&&P===T?E[P][k]=y:E[P][k]=y.clone().lerp(w,k/U)}for(let P=0;P<T;P++)for(let y=0;y<2*(T-P)-1;y++){let w=Math.floor(y/2);y%2===0?(d(E[P][w+1]),d(E[P+1][w]),d(E[P][w])):(d(E[P][w+1]),d(E[P+1][w+1]),d(E[P+1][w]))}}function c(_){let v=new C;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let _=new C;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let M=m(_)/2/Math.PI+.5,R=p(_)/Math.PI+.5;a.push(M,1-R)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let v=a[_+0],M=a[_+2],R=a[_+4],T=Math.max(v,M,R),E=Math.min(v,M,R);T>.9&&E<.1&&(v<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),R<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let M=_*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){let _=new C,v=new C,M=new C,R=new C,T=new j,E=new j,P=new j;for(let y=0,w=0;y<r.length;y+=9,w+=6){_.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),T.set(a[w+0],a[w+1]),E.set(a[w+2],a[w+3]),P.set(a[w+4],a[w+5]),R.copy(_).add(v).add(M).divideScalar(3);let U=m(R);x(T,w+0,_,U),x(E,w+2,v,U),x(P,w+4,M,U)}}function x(_,v,M,R){R<0&&_.x===1&&(a[v]=_.x-1),M.x===0&&M.z===0&&(a[v]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Lo=class s extends Pl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Io=class s extends Ee{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new C,g=new j;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let p=0;p<i;p++){let _=p+m,v=_,M=_+i+1,R=_+i+2,T=_+1;o.push(v,M,T),o.push(M,R,T)}}this.setIndex(o),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ue=class s extends Ee{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],v=p/i,M=0;p===0&&a===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(n+T*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(n+T*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+M,1-v),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){let v=h[p][_+1],M=h[p][_],R=h[p+1][_],T=h[p+1][_+1];(p!==0||a>0)&&f.push(v,M,T),(p!==i-1||l<Math.PI)&&f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ye=class s extends Ee{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let x=g/n*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let x=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,_=(n+1)*f+g;a.push(x,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Do=class extends Te{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},de=class extends nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function to(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Zg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Is=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];t:{e:{let a;i:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break e}a=i,i=0;break i}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends Is{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eh,endingEnd:eh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case ih:r=t,o=2*e-i;break;case nh:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ih:a=t,l=2*i-e;break;case nh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+_*a[c+R]+v*a[l+R]+M*a[u+R];return r}},Il=class extends Is{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Dl=class extends Is{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ni=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=to(e,this.TimeBufferType),this.values=to(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:to(t.times,Array),values:to(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case io:e=this.InterpolantFactoryMethodDiscrete;break;case no:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Zg(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ya,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=no;var $n=class extends Ni{};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=io;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends Ni{};Ul.prototype.ValueTypeName="color";var Nl=class extends Ni{};Nl.prototype.ValueTypeName="number";var Fl=class extends Is{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Qe.slerpFlat(r,0,a,c-o,a,c,l);return r}},ar=class extends Ni{InterpolantFactoryMethodLinear(t){return new Fl(this.times,this.values,this.getValueSize(),t)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.DefaultInterpolation=no;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Ni{};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=io;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Ni{};kl.prototype.ValueTypeName="vector";var Bl=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},$g=new Bl,Ol=class{constructor(t){this.manager=t!==void 0?t:$g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Uo=class extends lr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},$a=new Kt,jh=new C,Qh=new C,No=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),Qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qh),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var tu=new Kt,Js=new C,Ja=new C,zl=class extends No{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),i.position.copy(Js),Ja.copy(i.position),Ja.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ja),i.updateMatrixWorld(),n.makeTranslation(-Js.x,-Js.y,-Js.z),tu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}},rn=class extends lr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Hl=class extends No{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fo=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Hl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ko=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function eu(){return(typeof performance>"u"?Date:performance).now()}var Ql="\\[\\]\\.:\\/",Jg=new RegExp("["+Ql+"]","g"),tc="[^"+Ql+"]",Kg="[^"+Ql.replace("\\.","")+"]",jg=/((?:WC+[\/:])*)/.source.replace("WC",tc),Qg=/(WCOD+)?/.source.replace("WCOD",Kg),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),ix=new RegExp("^"+jg+Qg+tx+ex+"$"),nx=["material","materials","bones","map"],Gl=class{constructor(t,e,i){let n=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jg,"")}static parseTrackName(t){let e=ix.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);nx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Gl;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);var Ho={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},sx=new Cs(-1,1,1,-1,0,1),ec=class extends Ee{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},rx=new ec,Ln=class{constructor(t){this._mesh=new ue(rx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,sx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Us=class extends yi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Te?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pn.clone(t.uniforms),this.material=new Te({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ln(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ur=class extends yi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Go=class extends yi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Vo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new j);this._width=i.width,this._height=i.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Us(Ho),this.copyPass.material.blending=zi,this.clock=new ko}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ur!==void 0&&(a instanceof ur?i=!0:a instanceof Go&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wo=class extends yi{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Eu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ns=class s extends yi{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new Mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,a,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Xe(r,a,{type:vi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Xe(r,a,{type:vi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Eu;this.highPassUniforms=Pn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Te({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new j(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ho;this.copyUniforms=Pn.clone(h.uniforms),this.blendMaterial=new Te({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Di,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Mt,this.oldClearAlpha=1,this.basic=new ci,this.fsQuad=new Ln(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Te({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Te({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ns.BlurDirectionX=new j(1,0);Ns.BlurDirectionY=new j(0,1);var Tu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Xo=class extends yi{constructor(){super();let t=Tu;this.uniforms=Pn.clone(t.uniforms),this.material=new Do({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ln(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Mi(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Fi=class{constructor(t=1){let e=Mi(t);this.perm=new Uint16Array(512),this.gx=new Float32Array(256),this.gy=new Float32Array(256);let i=[];for(let n=0;n<256;n++){i.push(n);let r=e()*Math.PI*2;this.gx[n]=Math.cos(r),this.gy[n]=Math.sin(r)}for(let n=255;n>0;n--){let r=Math.floor(e()*(n+1));[i[n],i[r]]=[i[r],i[n]]}for(let n=0;n<512;n++)this.perm[n]=i[n&255]}noise(t,e,i=0){let n=Math.floor(t),r=Math.floor(e),a=t-n,o=e-r,l=n+1,c=r+1;i>0&&(n=(n%i+i)%i,r=(r%i+i)%i,l=(l%i+i)%i,c=(c%i+i)%i);let h=this.perm,u=(M,R,T,E)=>{let P=h[h[M&255]+R&511];return this.gx[P]*T+this.gy[P]*E},d=a*a*a*(a*(a*6-15)+10),f=o*o*o*(o*(o*6-15)+10),g=u(n,r,a,o),x=u(l,r,a-1,o),m=u(n,c,a,o-1),p=u(l,c,a-1,o-1),_=g+d*(x-g),v=m+d*(p-m);return(_+f*(v-_))*1.414}fbm(t,e,i=5,n=0,r=2,a=.5){let o=0,l=1,c=0,h=1;for(let u=0;u<i;u++)o+=l*this.noise(t*h,e*h,n?n*h:0),c+=l,l*=a,h*=r;return o/c}ridged(t,e,i=5,n=0){let r=0,a=.5,o=1,l=0;for(let c=0;c<i;c++){let h=1-Math.abs(this.noise(t*o,e*o,n?n*o:0));r+=a*h*h,l+=a,a*=.5,o*=2}return r/l}worley(t,e,i,n=.9){let r=Math.floor(t),a=Math.floor(e),o=9,l=9,c=0;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){let d=r+u,f=a+h,g=(d%i+i)%i,x=(f%i+i)%i,m=this.perm[this.perm[g&255]+x&511],p=this.perm[m+71&511],_=d+.5+(m/255-.5)*n,v=f+.5+(p/255-.5)*n,M=Math.hypot(_-t,v-e);M<o?(l=o,o=M,c=m):M<l&&(l=M)}return{d1:o,d2:l,id:c}}},ne=(s,t,e)=>s<t?t:s>e?e:s,Rt=(s,t,e)=>s+(t-s)*e,xe=(s,t,e)=>{let i=ne((e-s)/(t-s),0,1);return i*i*(3-2*i)};var Ne=new Fi(1337),ti=new Fi(7331);function an(s){return{size:s,col:new Float32Array(s*s*3),h:new Float32Array(s*s),rough:new Float32Array(s*s).fill(.9),metal:new Float32Array(s*s)}}function ic(s,t,e,i=4){let n=new So(s,t,t,xi);return n.wrapS=n.wrapT=er,n.magFilter=ui,n.minFilter=Yn,n.generateMipmaps=!0,n.anisotropy=8,e&&(n.colorSpace=Pe),n.needsUpdate=!0,n}function ln(s,t=4){let{size:e,col:i,h:n,rough:r,metal:a}=s,o=new Uint8Array(e*e*4),l=new Uint8Array(e*e*4),c=new Uint8Array(e*e*4);for(let h=0;h<e;h++)for(let u=0;u<e;u++){let d=h*e+u;o[d*4]=ne(Math.pow(i[d*3],1/2.2)*255,0,255),o[d*4+1]=ne(Math.pow(i[d*3+1],1/2.2)*255,0,255),o[d*4+2]=ne(Math.pow(i[d*3+2],1/2.2)*255,0,255),o[d*4+3]=255;let f=(u-1+e)%e,g=(u+1)%e,x=(h-1+e)%e,m=(h+1)%e,p=(n[h*e+g]-n[h*e+f])*t,_=(n[m*e+u]-n[x*e+u])*t,v=Math.hypot(p,_,1);l[d*4]=(-p/v*.5+.5)*255,l[d*4+1]=(-_/v*.5+.5)*255,l[d*4+2]=(1/v*.5+.5)*255,l[d*4+3]=255,c[d*4]=255,c[d*4+1]=ne(r[d],.04,1)*255,c[d*4+2]=ne(a[d],0,1)*255,c[d*4+3]=255}return{map:ic(o,e,!0),normalMap:ic(l,e,!1),ormMap:ic(c,e,!1)}}function cn(s,t,e,i,n){s.col[t*3]=e,s.col[t*3+1]=i,s.col[t*3+2]=n}function ox(s=512){let t=an(s);for(let e=0;e<s;e++)for(let i=0;i<s;i++){let n=i/s,r=e/s,a=e*s+i,o=Ne.fbm(n*6,r*6,5,6),l=xe(-.15,.3,Ne.fbm(n*3+11,r*3+3,4,3)),c=ti.noise(n*96,r*96,96),h=ti.noise(n*140,r*18,140)*.5+ti.noise(n*22,r*160,22)*.5,u=Ne.worley(n*24,r*24,24),d=xe(.3,.2,u.d1)*(u.id%9===0?1:0),f=[.075,.058,.045],g=[.24,.215,.13],x=[.085,.11,.05],m=xe(.1,.5,ti.fbm(n*5,r*5,3,5)),p=Rt(f[0],Rt(g[0],x[0],m),l),_=Rt(f[1],Rt(g[1],x[1],m),l),v=Rt(f[2],Rt(g[2],x[2],m),l),M=.75+o*.35+c*.08+h*.12*l;p*=M,_*=M,v*=M,p=Rt(p,.11,d*.6),_=Rt(_,.105,d*.6),v=Rt(v,.1,d*.6),cn(t,a,p,_,v);let R=xe(-.2,-.45,o)*(1-l);t.h[a]=o*.4+c*.05+h*.12*l+d*.35,t.rough[a]=Rt(.95,.35,R)}return ln(t,6)}function Au(s=512,t=!0){let e=an(s),i=Mi(t?42:77),n=[.3,.22,.26,.22],r=[0];for(let l of n)r.push(r[r.length-1]+l);let a=n.map(()=>{let l=2+Math.floor(i()*2),c=[],h=0;for(let f=0;f<l;f++){let g=.6+i()*.8;c.push(g),h+=g}let u=[],d=i();for(let f=0;f<l;f++)u.push(d%1),d+=c[f]/h;return u.sort((f,g)=>f-g),{cuts:u,tint:Array.from({length:l},()=>[.75+i()*.4,i()])}}),o=.01;for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=c/s,u=l/s,d=l*s+c,f=0;for(;f<a.length-1&&u>=r[f+1];)f++;let g=(u-r[f])/n[f],x=a[f],m=x.cuts.length-1;for(let X=0;X<x.cuts.length;X++)h>=x.cuts[X]&&(m=X);let p=x.cuts[m],_=x.cuts[(m+1)%x.cuts.length]+(m+1>=x.cuts.length?1:0),v=h-p;v<0&&(v+=1);let M=_-h;M>1&&(M-=1);let R=Ne.fbm(h*22,u*22,3,22)*.012,T=Math.min(v,M),E=Math.min(g,1-g)*n[f],P=Math.min(T,E)+R,y=P<o,w=xe(o,o+.045,P),U=Ne.fbm(h*8+m*3.1,u*8+f,5,8),k=ti.noise(h*90,u*90,90),Y=xe(.94,.985,Ne.ridged(h*4+f*.3,u*4,4,4)),[L,D]=x.tint[m],F=y?.055:(.19+U*.06+k*.012)*L*(.7+w*.3);F*=1-Y*.6;let G=F*(1+D*.06),W=F*.98,q=F*(.94-D*.05),Z=ti.fbm(h*6+3,u*6,4,6),J=t?ne(xe(-.05,.4,Z)*(y?1:(1-w)*.8+xe(.7,1,g)*.5),0,1):0;G=Rt(G,.045,J*.85),W=Rt(W,.07,J*.85),q=Rt(q,.025,J*.85);let st=xe(.15,.7,Ne.fbm(h*20,u*1.6,3,20))*.4;G*=1-st,W*=1-st,q*=1-st*.9,cn(e,d,G,W,q),e.h[d]=y?0:w*.55+U*.25+k*.05-Y*.35+J*.06,e.rough[d]=y?.98:.86+J*.1-st*.25}return ln(e,6)}function Ru(s=512,t=5,e=.55){let i=an(s),n=Mi(9),r=Array.from({length:t},()=>({tint:.75+n()*.45,off:n()*10,grey:n()}));for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=o/s,c=a/s,h=a*s+o,u=l*t,d=Math.floor(u),f=u-d,g=r[d],x=Ne.fbm(l*3+g.off,c*1.5,4,3)*.6,m=Math.sin((f*3+x)*22+g.off)*.5+.5,p=ti.noise(l*220,c*8,220)*.5+.5,_=Ne.worley(l*6+g.off,c*3,6),v=xe(.18,.04,_.d1)*(_.id%3===0?1:0),M=xe(.03,0,Math.min(f,1-f)),R=(.55+m*.25+p*.2)*g.tint;R*=1-v*.55;let T=.2*R,E=.13*R,P=.075*R,y=ne(e+ti.fbm(l*4,c*4,3,4)*.4+(g.grey-.5)*.3,0,1),w=.15*R;T=Rt(T,w,y),E=Rt(E,w*.96,y),P=Rt(P,w*.9,y),T*=1-M*.85,E*=1-M*.85,P*=1-M*.85;let U=(f-.5)*t,k=(c-.12)*1,Y=(c-.88)*1,L=Math.min(Math.hypot(U*.2,k*3),Math.hypot(U*.2,Y*3)),D=xe(.018,.008,L);T=Rt(T,.09,D),E=Rt(E,.07,D),P=Rt(P,.06,D),cn(i,h,T,E,P),i.h[h]=m*.15+p*.25-M*.6-v*.2+D*.2,i.rough[h]=.75+p*.15-D*.4,i.metal[h]=D*.8}return ln(i,4)}function ax(s=256){let t=an(s);for(let e=0;e<s;e++)for(let i=0;i<s;i++){let n=i/s,r=e/s,a=e*s+i,o=Ne.fbm(n*6,r*6,5,6),l=xe(.05,.35,ti.fbm(n*4+5,r*4,4,4)+(1-r)*.15),c=Ne.worley(n*30,r*30,30).d1,h=.42+o*.08,u=.27+o*.05,d=.12+o*.03;h=Rt(h,.16,l),u=Rt(u,.34,l),d=Rt(d,.28,l),cn(t,a,h,u,d),t.h[a]=c*.25+l*.2,t.rough[a]=Rt(.38+o*.1,.85,l),t.metal[a]=Rt(1,.1,l)}return ln(t,3)}function lx(s=256){let t=an(s);for(let e=0;e<s;e++)for(let i=0;i<s;i++){let n=i/s,r=e/s,a=e*s+i,o=Ne.fbm(n*8,r*8,5,8),l=xe(-.05,.3,ti.fbm(n*5,r*5,5,5)),c=Rt(.13,.32,l),h=Rt(.12,.15,l),u=Rt(.115,.07,l);c*=.85+o*.3,h*=.85+o*.3,u*=.85+o*.3,cn(t,a,c,h,u),t.h[a]=l*.3+o*.2,t.rough[a]=Rt(.45,.95,l),t.metal[a]=Rt(.9,.2,l)}return ln(t,4)}function cx(s=512){let t=an(s);for(let e=0;e<s;e++)for(let i=0;i<s;i++){let n=i/s,r=e/s,a=e*s+i,o=Ne.fbm(n*5,r*5,6,5),l=ti.noise(n*120,r*120,120),c=xe(.1,.6,Ne.fbm(n*18,r*1.2+4,4,18))*.55+xe(.2,-.4,o)*.25,h=ti.worley(n*14,r*14,14),u=xe(.45,.2,h.d1)*xe(.1,.4,ti.fbm(n*3,r*3,3,3)),d=h.id%4===0,f=.36+o*.06+l*.02,g=f,x=f*.98,m=f*.93;g=Rt(g,.09,c),x=Rt(x,.09,c),m=Rt(m,.08,c),d?(g=Rt(g,.3,u*.35),x=Rt(x,.2,u*.35),m=Rt(m,.1,u*.35)):(g=Rt(g,.18,u*.45),x=Rt(x,.21,u*.45),m=Rt(m,.1,u*.45)),cn(t,a,g,x,m),t.h[a]=o*.3+l*.05+u*.12,t.rough[a]=.88-c*.1}return ln(t,4)}function hx(s=256){let t=an(s);for(let e=0;e<s;e++)for(let i=0;i<s;i++){let n=i/s,r=e/s,a=e*s+i,o=Ne.fbm(n*2,r*2,3,2)*.4,l=ti.ridged(n*6+o,r*1.2,5,6),c=Ne.fbm(n*16,r*16,4,16),h=.05+l*.13+c*.03,u=xe(.25,.5,Ne.fbm(n*6+9,r*6,4,6));cn(t,a,Rt(h*1.05,.14,u*.5),Rt(h*.95,.16,u*.5),Rt(h*.85,.1,u*.5)),t.h[a]=l*.8+c*.1,t.rough[a]=.95}return ln(t,5)}function ux(s=256){let t=an(s);for(let e=0;e<s;e++)for(let i=0;i<s;i++){let n=i/s,r=e/s,a=e*s+i,o=Math.sin(n*Math.PI*2*64),l=Math.sin(r*Math.PI*2*64),c=o>0!=l>0?Math.abs(o):Math.abs(l),h=Ne.fbm(n*5,r*5,4,5),u=xe(0,.5,ti.fbm(n*3,r*3,4,3))*.4,d=(.72+c*.18+h*.12)*(1-u);cn(t,a,d,d*.97,d*.93),t.h[a]=c*.3+h*.1,t.rough[a]=.95}return ln(t,2)}function dx(s=512){let t=an(s),e=[.25-.055,.25+.055];for(let i=0;i<s;i++)for(let n=0;n<s;n++){let r=n/s,a=i/s,o=i*s+n,l=Ne.fbm(r*10,a*10,5,10),c=.42+l*.06,h=0;for(let f of e){let g=ti.noise(a*14,f*30)*.008,x=Math.abs(r-f-g),m=a<.56?xe(.08,.3,.56-a)*.3+.7:0,p=.006+(.56-a)*.02;h=Math.max(h,xe(p,0,x)*m*(a>.12?1:0))}let u=xe(.004,0,Math.abs(r-.262-Ne.fbm(a*6,1,3)*.03))*(a>.5&&a<.95?1:0),d=xe(.004,0,Math.abs(a-.36-Math.sin((r-.25)*60)*.004))*xe(.04,.025,Math.abs(r-.25));c=Rt(c,.04,d),c=Rt(c,.06,h*.9),c=Rt(c,.1,u),cn(t,o,c,c*.98,c*.95),t.h[o]=l*.2-u*.5+h*.05,t.rough[o]=Rt(.85,.3,h)}return ln(t,3)}function Fs(s,t){let e=document.createElement("canvas");e.width=e.height=s;let i=e.getContext("2d");t(i,s);let n=new To(e);return n.colorSpace=Pe,n}function fx(){return Fs(256,(s,t)=>{let e=s.createImageData(t,t);for(let i=0;i<t;i++)for(let n=0;n<t;n++){let r=n/t,a=i/t,o=Math.hypot(r-.5,a-.5)*2,l=Ne.fbm(r*4,a*4,5,4)*.5+.5,c=ne((1-o)*1.4,0,1)*l,h=(i*t+n)*4;e.data[h]=e.data[h+1]=e.data[h+2]=255,e.data[h+3]=c*c*255}s.putImageData(e,0,0)})}function px(){return Fs(128,(s,t)=>{let e=s.createRadialGradient(t/2,t*.62,2,t/2,t*.55,t*.45);e.addColorStop(0,"rgba(255,250,220,1)"),e.addColorStop(.25,"rgba(255,190,90,0.95)"),e.addColorStop(.6,"rgba(230,90,20,0.45)"),e.addColorStop(1,"rgba(120,20,0,0)"),s.fillStyle=e,s.beginPath(),s.moveTo(t/2,t*.04),s.bezierCurveTo(t*.78,t*.4,t*.82,t*.92,t/2,t*.96),s.bezierCurveTo(t*.18,t*.92,t*.22,t*.4,t/2,t*.04),s.fill()})}function mx(){return Fs(128,(s,t)=>{let e=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=e,s.fillRect(0,0,t,t)})}function gx(){return Fs(128,(s,t)=>{s.clearRect(0,0,t,t);let e=Mi(5);for(let i=0;i<4;i++){s.strokeStyle=`rgba(${150+e()*60},${20+e()*20},20,${.6+e()*.4})`,s.lineWidth=2+e()*3,s.lineCap="round",s.beginPath();let n=20+i*22+e()*8;s.moveTo(n,10+e()*20),s.quadraticCurveTo(n+10,64,n-4+e()*10,108+e()*10),s.stroke()}})}function xx(){return Fs(64,(s,t)=>{let e=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(220,215,200,0.9)"),e.addColorStop(1,"rgba(200,190,170,0)"),s.fillStyle=e,s.fillRect(0,0,t,t)})}function vx(){return Fs(256,(s,t)=>{s.clearRect(0,0,t,t);let e=Mi(31);for(let i=0;i<70;i++){let n=t*(.3+e()*.4),r=(e()-.5)*t*.7,a=t*(.45+e()*.5),o=2+e()*3.5,l=e(),c=`rgb(${Math.floor(60+l*70)},${Math.floor(62+l*40)},${Math.floor(28+l*12)})`,h=s.createLinearGradient(0,t,0,t-a);h.addColorStop(0,"rgb(22,20,12)"),h.addColorStop(.5,c),h.addColorStop(1,`rgb(${Math.floor(110+l*60)},${Math.floor(100+l*40)},${Math.floor(60)})`),s.fillStyle=h,s.beginPath(),s.moveTo(n-o,t),s.quadraticCurveTo(n+r*.3-o*.5,t-a*.6,n+r,t-a),s.quadraticCurveTo(n+r*.3+o*.5,t-a*.6,n+o,t),s.closePath(),s.fill()}})}async function Cu(s){let t=[["ground",()=>ox(512)],["stone",()=>Au(512,!0)],["stoneClean",()=>Au(256,!1)],["planks",()=>Ru(512,5,.55)],["timber",()=>Ru(256,2,.75)],["bronze",()=>ax(256)],["iron",()=>lx(256)],["statue",()=>cx(512)],["bark",()=>hx(256)],["cloth",()=>ux(256)],["mask",()=>dx(512)],["mist",fx],["flame",px],["glow",mx],["scratch",gx],["dust",xx],["tuft",vx]],e={};for(let i=0;i<t.length;i++){let[n,r]=t[i];e[n]=r(),s?.((i+1)/t.length,n),await new Promise(a=>setTimeout(a,0))}return e}function hn(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ee,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Pu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=Pu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Pu(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new t(r),o=0;for(let c=0;c<s.length;++c)a.set(s[c].array,o),o+=s[c].array.length;let l=new _e(a,e,i);return n!==void 0&&(l.gpuType=n),l}var nc=new Fi(99),_x=`
varying vec3 vWPos; varying vec3 vWNrm;
float wHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float wNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(wHash(i), wHash(i+vec2(1,0)), f.x), mix(wHash(i+vec2(0,1)), wHash(i+vec2(1,1)), f.x), f.y); }
`;function Kn(s,{grime:t=1.4,moss:e=.8,vary:i=.5}={}){return s.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec3 vWNrm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 wwp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wwp = instanceMatrix * wwp;
        #endif
        wwp = modelMatrix * wwp; vWPos = wwp.xyz; vWNrm = normalize(mat3(modelMatrix) * objectNormal);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+_x).replace("#include <map_fragment>",`#include <map_fragment>
        float wn = wNoise(vWPos.xz * 0.23 + vWPos.y * 0.15);
        float wn2 = wNoise(vWPos.xz * 1.3 + vec2(vWPos.y * 1.1, -vWPos.y * 0.7));
        diffuseColor.rgb *= mix(1.0 - ${i.toFixed(2)}, 1.0 + ${(i*.4).toFixed(2)}, wn) * mix(0.88, 1.06, wn2);
        float gr = 1.0 - smoothstep(0.0, ${t.toFixed(2)}, vWPos.y + (wn2 - 0.5) * 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.32, 0.3, 0.26), gr * 0.85);
        float up = smoothstep(0.5, 0.9, vWNrm.y) * smoothstep(0.3, 0.6, wn2);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.035, 0.055, 0.022), up * ${e.toFixed(2)});`)},s.customProgramCacheKey=()=>"weather"+t+e+i,s}function Lu(s){let t=(i,n={})=>new de({map:i.map,normalMap:i.normalMap,roughnessMap:i.ormMap,metalnessMap:i.ormMap,roughness:1,metalness:n.metalness??1,...n}),e={ground:new de({map:s.ground.map,normalMap:s.ground.normalMap,roughnessMap:s.ground.ormMap,roughness:1,metalness:0,vertexColors:!0}),stone:t(s.stone),stoneClean:t(s.stoneClean),planks:t(s.planks),timber:t(s.timber,{color:12101264}),bronze:t(s.bronze),iron:t(s.iron),statue:t(s.statue),mask:t(s.mask),bark:t(s.bark),peat:new de({color:328707,roughness:.08,metalness:.2}),peatBlock:t(s.ground,{color:4864556,metalness:0}),wax:new de({color:14208176,roughness:.6,emissive:3809288,emissiveIntensity:.4}),black:new de({color:197379,roughness:.35}),relic:new ci({color:16734750}),relicDead:new de({color:1707272,roughness:.9}),shroud:new de({color:13617336,roughness:1,side:ge,map:s.cloth.map,normalMap:s.cloth.normalMap}),tendril:new de({color:525830,roughness:.3,metalness:.1}),lanternGlass:new ci({color:3349520}),lanternLit:new ci({color:16767136}),lanternRed:new ci({color:16726564}),reed:new de({color:4868650,roughness:.9,side:ge}),aura:new ci({color:16722464,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1,blending:Di,fog:!1}),auraAlly:new ci({color:16769184,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,blending:Di,fog:!1})};return Kn(e.stone,{grime:1.6,moss:.85,vary:.45}),Kn(e.stoneClean,{grime:.9,moss:.6,vary:.35}),Kn(e.planks,{grime:.8,moss:.3,vary:.4}),Kn(e.timber,{grime:1,moss:.4,vary:.35}),Kn(e.statue,{grime:.6,moss:.7,vary:.4}),Kn(e.bark,{grime:1.2,moss:.5,vary:.4}),Kn(e.peatBlock,{grime:.5,moss:.5,vary:.35}),e.relStone=t(s.statue,{color:13157046}),e.flame=new Ps({map:s.flame,blending:Di,depthWrite:!1,transparent:!0}),e.glow=new Ps({map:s.glow,color:16754784,blending:Di,depthWrite:!1,transparent:!0,fog:!1,opacity:.35}),e.cloth=i=>new de({color:i,map:s.cloth.map,normalMap:s.cloth.normalMap,normalScale:new j(.6,.6),roughness:.95}),e.skin=i=>new de({color:i,roughness:.65}),e.T=s,e}function dr(s,t=.5){let e=s.attributes.position,i=s.attributes.normal,n=new Float32Array(e.count*2);for(let r=0;r<e.count;r++){let a=Math.abs(i.getX(r)),o=Math.abs(i.getY(r)),l=Math.abs(i.getZ(r)),c,h;o>=a&&o>=l?(c=e.getX(r),h=e.getZ(r)):a>=l?(c=e.getZ(r),h=e.getY(r)):(c=e.getX(r),h=e.getY(r)),n[r*2]=c*t,n[r*2+1]=h*t}return s.setAttribute("uv",new _e(n,2)),s}function Qt(s,t,e,i,n,r,a=0,o=0,l=0){let c=new ee(s,t,e),h=new Kt().compose(new C(i,n,r),new Qe().setFromEuler(new An(o,a,l)),new C(1,1,1));return c.applyMatrix4(h),c}var Hi=class{constructor(){this.lists=new Map}add(t,e,i){i&&dr(e,i);let n=e.index?e.toNonIndexed():e;for(let r of Object.keys(n.attributes))["position","normal","uv"].includes(r)||n.deleteAttribute(r);this.lists.has(t)||this.lists.set(t,[]),this.lists.get(t).push(n)}build(t,{cast:e=!0,receive:i=!0}={}){for(let[n,r]of this.lists)for(let a=0;a<r.length;a+=400){let o=hn(r.slice(a,a+400),!1),l=new ue(o,n);l.castShadow=e,l.receiveShadow=i,t.add(l)}this.lists.clear()}};function nt(s,t,e,i=0,n=0,r=0,a=!0){let o=new ue(s,t);return o.position.set(i,n,r),o.castShadow=a,o.receiveShadow=!0,e?.add(o),o}function se(s,t=0,e=0,i=0){let n=new De;return n.position.set(t,e,i),s.add(n),n}function qo(s,t,e,i,n=!1){let r=s.attributes.position;for(let a=0;a<r.count;a++){let o=r.getX(a),l=r.getY(a),c=r.getZ(a),h=Math.hypot(o,c);if(h<1e-4)continue;let u=Math.atan2(c,o),d=n?l/i+.5:l/i,f=n?d:1-d*.8,g=(Math.sin(u*t+d*3)*e+nc.noise(u*3,l*4)*e*.8)*f,x=h+g;r.setX(a,o/h*x),r.setZ(a,c/h*x)}s.computeVertexNormals()}function Yo(s,t){let e=[];s.traverse(n=>{e.push([n,n.userData]),n.userData={}});let i=s.clone(!0);for(let[n,r]of e)n.userData=r;return i.traverse(n=>{n.isMesh&&(n.material=t,n.castShadow=!1,n.receiveShadow=!1,n.renderOrder=999)}),i}var Zo=[{id:"wren",short:"Wren",name:"Wren Ashdown",title:"Peat Cutter",jacket:4936242,pants:3812898,skin:14266508,hair:5913378,extra:"cap",voice:1.25,bio:"Cut turf on the moor since she was nine. Knows where the ground will hold."},{id:"ilias",short:"Ilias",name:"Father Ilias Moro",title:"Defrocked Priest",jacket:1578778,pants:1578778,skin:13081208,hair:10132120,extra:"cassock",voice:.82,bio:"He rang the parish bells the night the village sank. He has not slept since."},{id:"juno",short:"Juno",name:"Juno Okafor",title:"Lightkeeper's Daughter",jacket:12095530,pants:2501168,skin:6964784,hair:1314314,extra:"oilskin",voice:1.18,bio:"Followed a lantern inland from the drowned lighthouse. The lantern was not hers."},{id:"tey",short:"Tey",name:'Teodor "Tey" Vas',title:"Grave-Robber",jacket:3023904,pants:2829099,skin:14727318,hair:2759184,extra:"bandana",voice:.95,bio:"Dug up the wrong saint. Has been running ever since."}];function Du(s,t){let e=new De,i=se(e),n=t.cloth(s.jacket),r=t.cloth(s.pants),a=t.skin(s.skin),o=t.cloth(s.hair),l=new de({color:1709072,roughness:.7}),c={};c.hips=se(i,0,.95,0),nt(new ee(.34,.2,.21),r,c.hips,0,.02,0),c.spine=se(c.hips,0,.06,0),nt(new Cn(.16,.3,6,14),n,c.spine,0,.27,0).scale.set(1.18,1,.78);let u=nt(new qt(.19,.21,.16,16,1,!0),n,c.hips,0,-.02,0);u.material=n.clone(),u.material.side=ge,u.scale.set(1,1,.8),nt(new qt(.185,.185,.035,16,1,!0),new de({color:1971728,roughness:.6,side:ge}),c.hips,0,.07,0).scale.set(1,1,.8),nt(new ee(.04,.035,.02),t.iron,c.hips,0,.07,.15);let f=nt(new Ye(.075,.022,6,16),n,c.spine,0,.52,0);f.rotation.x=Math.PI/2,c.neck=se(c.spine,0,.55,0),nt(new qt(.045,.05,.08,10),a,c.neck,0,.02,0),c.head=se(c.neck,0,.07,0),nt(new Ue(.105,20,16),a,c.head,0,.1,.005).scale.set(.92,1.12,1),nt(new Ue(.11,18,12,0,Math.PI*2,0,Math.PI*.55),o,c.head,0,.115,-.008).scale.set(.95,1.08,1.04),nt(new Ue(.108,16,12,Math.PI*1.15,Math.PI*.7,.2,Math.PI*.62),o,c.head,0,.1,-.012).scale.set(.96,1.14,1.06),nt(new ee(.025,.04,.03),a,c.head,0,.085,.1);let p=t.cloth(s.hair);for(let _ of[-1,1])nt(new Ue(.012,6,6),t.black,c.head,_*.036,.115,.093,!1),nt(new ee(.035,.008,.01),p,c.head,_*.037,.135,.097,!1).rotation.z=_*-.15,nt(new Ue(.022,8,6),a,c.head,_*.097,.1,0).scale.set(.45,1,.8);nt(new ee(.04,.006,.01),new de({color:4860452,roughness:.7}),c.head,0,.055,.098,!1);for(let _ of["L","R"]){let v=_==="L"?1:-1,M=c["sh"+_]=se(c.spine,v*.215,.47,0);nt(new Cn(.055,.2,4,10),n,M,0,-.14,0);let R=c["el"+_]=se(M,0,-.29,0);nt(new Cn(.047,.19,4,10),n,R,0,-.12,0),nt(new Ue(.052,10,8),a,R,0,-.275,.005).scale.set(.85,1.25,.6),nt(new Ue(.02,6,6),a,R,v*-.035,-.26,.02);let T=c["hip"+_]=se(c.hips,v*.1,-.02,0);nt(new Cn(.075,.28,4,10),r,T,0,-.21,0);let E=c["kn"+_]=se(T,0,-.43,0);nt(new Cn(.06,.3,4,10),r,E,0,-.2,0),nt(new ee(.1,.075,.25),l,E,0,-.43,.045)}if(s.extra==="cap"){nt(new qt(.115,.115,.05,16),t.cloth(3814440),c.head,0,.19,0),nt(new ee(.2,.012,.09),t.cloth(3814440),c.head,0,.17,.1);let _=nt(new Ye(.075,.03,8,16),t.cloth(8004640),c.neck,0,0,0);_.rotation.x=Math.PI/2}else if(s.extra==="cassock"){nt(new qt(.2,.3,.75,16,1,!0),n,c.hips,0,-.33,0).material.side=ge;let _=nt(new Ye(.058,.014,6,16),new de({color:15658730,roughness:.6}),c.neck,0,0,0);_.rotation.x=Math.PI/2;let v=nt(new Ye(.12,.006,4,20),t.bronze,c.spine,0,.32,.12);v.rotation.x=.3}else if(s.extra==="oilskin"){let _=nt(new qt(.2,.26,.4,16,1,!0),n,c.hips,0,-.14,0);_.material=n.clone(),_.material.side=ge,_.material.roughness=.45;let v=nt(new Ue(.12,14,10,0,Math.PI*2,0,Math.PI/2),n,c.spine,0,.52,-.08);v.rotation.x=-1.2,nt(new Ue(.06,10,8),o,c.head,0,.17,-.09)}else if(s.extra==="bandana"){let _=nt(new qt(.113,.113,.04,16,1,!0),t.cloth(9051674),c.head,0,.16,0);_.material.side=ge,nt(new ee(.16,.2,.08),t.cloth(4864552),c.hips,-.2,-.05,.02),nt(new Ye(.3,.012,4,24),t.cloth(2760728),c.spine,-.03,.2,0).rotation.set(0,Math.PI/2,.7),nt(new qt(.2,.25,.45,14,1,!0),n,c.hips,0,-.18,0).material.side=ge}return e.userData={j:c,body:i,pose:{},def:s},e.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0)}),e}var Iu=["hips","spine","neck","head","shL","elL","shR","elR","hipL","knL","hipR","knR"];function Uu(s,t,e,i,n={}){let{j:r,body:a}=s.userData,o={};for(let x of Iu)o[x]=[0,0,0];let l=0,c=0,h=0,u=n.speed??0,d=Math.sin,f=Math.cos;switch(t){case"idle":case"stand":{let x=d(e*1.6);o.spine[0]=.03*x,o.shL[2]=.08,o.shR[2]=-.08,o.elL[0]=-.15,o.elR[0]=-.15,o.head[0]=n.injured?.25:.02*x,n.injured&&(o.spine[0]=.25,o.shL[0]=-.4,o.elL[0]=-1.6);break}case"walk":case"run":case"back":case"crouch":{let x=t==="run",m=t==="crouch",p=t==="back",v=e*(x?9.5:m?5.5:7.2)*(p?-1:1),M=x?.75:.45;o.hipL[0]=d(v)*M,o.hipR[0]=-d(v)*M,o.knL[0]=Math.max(0,-d(v+.6))*(x?1.4:.8),o.knR[0]=Math.max(0,d(v+.6))*(x?1.4:.8),o.shL[0]=-d(v)*(x?.9:.4),o.shR[0]=d(v)*(x?.9:.4),o.elL[0]=x?-1.3:-.3,o.elR[0]=x?-1.3:-.3,o.spine[0]=x?.28:.06,o.spine[1]=d(v)*.1,l=Math.abs(d(v))*(x?.06:.025),m&&(l=-.38,o.hipL[0]-=1.1,o.hipR[0]-=1.1,o.knL[0]+=1.7,o.knR[0]+=1.7,o.spine[0]=.55,o.head[0]=-.4,o.shL[0]=-.5,o.shR[0]=-.5),n.injured&&!m&&(o.shL[0]=-.4,o.elL[0]=-1.7,o.spine[2]=.08,o.head[0]=.1),p&&(o.spine[0]=-.05,o.head[0]=-.05);break}case"crawl":{let x=e*3*Math.min(1,u+.15);c=1.35,l=-.68,o.head[0]=-1,o.neck[0]=-.2,o.shL[0]=-2.6+d(x)*.5,o.shR[0]=-2.6-d(x)*.5,o.elL[0]=-.4,o.elR[0]=-.4,o.hipL[0]=.1+d(x)*.2,o.hipR[0]=.1-d(x)*.2,o.knL[0]=.4,o.knR[0]=.6;break}case"ring":{let x=e*2.4,m=(d(x)+1)/2;o.shL[0]=-2.7+m*1,o.shR[0]=-2.7+m*1,o.shL[2]=-.15,o.shR[2]=.15,o.elL[0]=-.2-m*.9,o.elR[0]=-.2-m*.9,o.spine[0]=.05+m*.25,o.head[0]=-.35+m*.2,o.hipL[0]=-m*.35,o.hipR[0]=-m*.35,o.knL[0]=m*.7,o.knR[0]=m*.7,l=-m*.1;break}case"work":{let x=e*4;l=-.42,o.hipL[0]=-1.5,o.knL[0]=2.2,o.hipR[0]=.25,o.knR[0]=1.65,o.spine[0]=.45,o.head[0]=.2,o.shL[0]=-1.1+d(x)*.15,o.shR[0]=-1.15+d(x+1.5)*.15,o.elL[0]=-.7,o.elR[0]=-.7;break}case"reach":{let x=e*3;o.shL[0]=-1.35+d(x)*.08,o.shR[0]=-1.4,o.elL[0]=-.4,o.elR[0]=-.5,o.spine[0]=.2;break}case"hooked":{let x=d(e*1.3)*(n.struggle?.35:.08);o.shL[0]=-2.95,o.shR[0]=-2.95,o.shL[2]=-.25,o.shR[2]=.25,o.elL[0]=-.2,o.elR[0]=-.2,o.head[0]=.55,o.spine[0]=.1+x,o.spine[1]=x,o.hipL[0]=.15+(n.struggle?d(e*9)*.5:0),o.hipR[0]=-.05-(n.struggle?d(e*9)*.5:0),o.knL[0]=.4,o.knR[0]=.3;break}case"carried":{let x=n.wiggle?d(e*12)*.35:0;c=1.5,o.shL[0]=-2.9+x,o.shR[0]=-2.9-x,o.elL[0]=-.2,o.elR[0]=-.2,o.head[0]=.4,o.hipL[0]=-.3+x,o.hipR[0]=-.3-x,o.knL[0]=1.2,o.knR[0]=1;break}case"vault":{l=.15,o.hipL[0]=-1.5,o.hipR[0]=-1.2,o.knL[0]=1.9,o.knR[0]=1.6,o.shL[0]=-1.2,o.shR[0]=-.8,o.spine[0]=.45;break}case"drop":{o.shR[0]=-1-1.4*Math.max(0,1-(n.phase??1)),o.shL[0]=-.6,o.spine[0]=.3;break}}n.lookPitch!==void 0&&(t==="idle"||t==="walk"||t==="run"||t==="back"||t==="stand")&&(o.head[0]+=n.lookPitch*.5,o.neck[0]+=n.lookPitch*.3,o.head[1]+=(n.lookYaw??0)*.6,o.neck[1]+=(n.lookYaw??0)*.3);let g=1-Math.exp(-i*(t==="vault"?25:14));for(let x of Iu){let m=r[x].rotation;m.x+=(o[x][0]-m.x)*g,m.y+=(o[x][1]-m.y)*g,m.z+=(o[x][2]-m.z)*g}a.position.y+=(l-a.position.y)*g,a.rotation.x+=(c-a.rotation.x)*g,a.position.z+=(h-a.position.z)*g}var yx={pray:{lean:.05,twist:0,hx:.35,hy:0,hz:0,l:[-.95,-.55,-1.45],r:[-.95,.55,-1.45],curl:.6},reach:{lean:.38,twist:0,hx:-.15,hy:0,hz:.1,l:[-1.5,-.12,-.1],r:[-1.55,.1,-.15],curl:.05},lunge:{lean:.62,twist:.35,hx:-.25,hy:-.2,hz:.25,l:[-1.15,-.2,-.3],r:[-2.5,.25,-.7],curl:.15},claw:{lean:.15,twist:-.1,hx:-.4,hy:0,hz:-.15,l:[-2.85,-.4,-.5],r:[-2.8,.45,-.55],curl:.9},tilt:{lean:.18,twist:.1,hx:.25,hy:.3,hz:.75,l:[.08,-.08,-.15],r:[.05,.1,-.1],curl:.3},beckon:{lean:.1,twist:-.25,hx:.05,hy:.45,hz:.2,l:[-.7,-.6,-1.6],r:[-1.25,.75,-.8],curl:.45},stalk:{lean:.95,twist:.05,hx:-.75,hy:.15,hz:-.1,l:[-.55,-.15,-.25],r:[-.5,.2,-.2],curl:.7},carry:{lean:.25,twist:.2,hx:.1,hy:-.3,hz:.1,l:[-.4,-.2,-1.9],r:[-.9,.5,-.4],curl:.8},weep:{lean:.3,twist:0,hx:.75,hy:0,hz:.05,l:[-1.7,-.75,-2],r:[-1.65,.7,-2.05],curl:.5}};function fr(s,{alive:t=!0}={}){let e=new De,i=s.relStone,n=[[.5,0],[.47,.08],[.4,.45],[.32,.85],[.26,1.12],[.235,1.27],[.22,1.3]].map(([E,P])=>new j(E,P)),r=new Rn(n,64);qo(r,11,.04,1.3);{let E=r.attributes.position;for(let P=0;P<E.count;P++)if(E.getY(P)<.01){let y=Math.atan2(E.getZ(P),E.getX(P));E.setY(P,Math.max(0,nc.noise(y*4,3)*.08+.02))}r.computeVertexNormals()}nt(r,i,e);for(let E=0;E<6;E++){let P=E/6*Math.PI*2+.3;nt(new Ti(.05,.22,4),i,e,Math.cos(P)*.5,.04,Math.sin(P)*.5).rotation.set(Math.PI/2+.5,0,-P)}let a=se(e,0,1.24,0),o=[[.22,0],[.26,.14],[.29,.28],[.3,.38],[.24,.48],[.1,.55],[0,.56]].map(([E,P])=>new j(E,P)),l=new Rn(o,48);qo(l,7,.018,.56),nt(l,i,a).scale.set(1.08,1,.78);for(let E of[-1,1]){let P=nt(new ee(.07,.95,.02),i,a,E*.09,-.1,.24);P.rotation.x=-.12}let h=se(a,0,.27,.215);nt(new ee(.13,.17,.07),s.bronze,h),nt(new Ti(.085,.07,4),s.bronze,h,0,.12,0).rotation.y=Math.PI/4;let u=nt(new sn(.07,.1),t?s.relic.clone():s.relicDead,h,0,0,.036,!1);for(let E of[-1,1])nt(new ee(.01,.12,.015),s.bronze,h,E*.04,0,.04);let d=nt(new Ye(.25,.016,6,40),s.iron,e,0,1.08,0);d.rotation.x=Math.PI/2+.12,d.scale.set(1.1,.85,1);let f=se(a,0,.55,.03),g=new Ue(.2,32,24,Math.PI*.82,Math.PI*1.36,0,Math.PI*.72);{let E=g.attributes.position;for(let P=0;P<E.count;P++){let y=E.getY(P);if(y>0){let w=y/.2;E.setY(P,y*(1+.45*w*w)),E.setZ(P,E.getZ(P)-.07*w*w)}}g.computeVertexNormals()}nt(g,i,f,0,.1,-.01).scale.set(1,1.12,1.2),nt(g.clone(),new de({color:131586,roughness:1,side:Ge}),f,0,.1,-.012,!1).scale.set(.985,1.1,1.18),nt(new Ue(.12,28,22),s.mask,f,0,.085,.045).scale.set(.78,1.2,.6);for(let E of[-1,1])nt(new Ue(.024,10,8),s.black,f,E*.04,.11,.108,!1).scale.set(1.15,.7,.6);let _=se(f,0,.2,-.22),v=nt(new Ye(.34,.02,8,64,Math.PI*1.45),s.bronze,_);v.rotation.z=.9;let M=nt(new Ye(.34,.02,8,12,.45),s.bronze,_,.03,-.05,.02);M.rotation.z=-.25;let R=Mi(17);for(let E=0;E<9;E++){let P=E/9*Math.PI*2,y=.08+R()*.18,w=nt(new Ti(.011,y,4),s.bronze,_,Math.cos(P)*(.36+y/2),Math.sin(P)*(.36+y/2),0);w.rotation.z=P-Math.PI/2}let T={};for(let E of["l","r"]){let P=E==="l"?1:-1,y=se(a,P*.3,.38,0),w=new qt(.075,.15,.44,18,4,!0);qo(w,5,.012,.44,!0);let U=nt(w,i,y,0,-.2,0);U.material=i.clone(),U.material.side=ge;let k=se(y,0,-.38,0);nt(new qt(.036,.027,.52,10),i,k,0,-.26,0);let Y=se(k,0,-.53,0);nt(new ee(.068,.1,.026),i,Y,0,-.04,0);let L=[];for(let F=0;F<4;F++){let G=se(Y,-.025+F*.017,-.088,0),W=[.19,.24,.23,.18][F],q=nt(new qt(.0075,.0065,W*.55,5),i,G,0,-W*.27,0),Z=se(G,0,-W*.55,0);nt(new qt(.0065,.003,W*.5,5),i,Z,0,-W*.25,0),G.userData.k2=Z,L.push(G)}let D=se(Y,P*.038,-.03,.01);nt(new qt(.008,.005,.11,5),i,D,0,-.055,0),D.rotation.z=P*.7,T[E]={sh:y,el:k,hand:Y,fingers:L}}return e.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),e.userData={chest:a,head:f,arms:T,relic:u,alive:t},e}function jn(s,t){let e=typeof t=="string"?yx[t]:t,{chest:i,head:n,arms:r}=s.userData;i.rotation.set(e.lean,e.twist,0),n.rotation.set(e.hx,e.hy,e.hz);for(let a of["l","r"]){let o=r[a],l=e[a];o.sh.rotation.set(l[0],0,l[1]),o.el.rotation.set(l[2],0,0),o.hand.rotation.set(-e.curl*.3,0,0);for(let c of o.fingers)c.rotation.x=-e.curl*.8,c.userData.k2&&(c.userData.k2.rotation.x=-e.curl*1)}}function Nu(s){let t=new De,e=new Hi;e.add(s.stoneClean,Qt(1.7,.42,1.7,0,.21,0),.6),e.add(s.stoneClean,Qt(1.9,.08,1.9,0,.44,0),.6);for(let x of[-1,1])e.add(s.timber,Qt(.2,2.9,.2,x*.72,1.9,0),.7),e.add(s.timber,Qt(.12,1.1,.12,x*.48,1,0,0,0,x*.55),.7);e.add(s.timber,Qt(1.9,.22,.24,0,3.32,0),.7),e.add(s.timber,Qt(.5,.18,.3,0,3.12,0),.7),e.add(s.iron,Qt(.08,.2,.08,0,3,0),1),e.build(t);let i=se(t,0,3.02,0),n=[[.43,0],[.45,.025],[.42,.07],[.35,.18],[.3,.36],[.285,.52],[.26,.62],[.16,.69],[0,.71]].map(([x,m])=>new j(x,m)),r=new Rn(n,40),a=nt(r,s.bronze.clone(),i,0,-.73,0);a.material.side=ge;let o=nt(new Ye(.44,.02,6,40),s.bronze,i,0,-.71,0);o.rotation.x=Math.PI/2;let l=se(i,0,-.1,0);nt(new qt(.012,.012,.5,6),s.iron,l,0,-.27,0),nt(new Ue(.05,10,8),s.iron,l,0,-.55,0);let c=se(i,.3,-.05,0);nt(new qt(.014,.014,1.9,6),new de({color:9075290,roughness:1}),c,0,-.95,0);let h=nt(new qt(.04,.04,.32,10),s.cloth(9054754),c,0,-1.35,0);for(let x of[-.08,.08])nt(new qt(.042,.042,.05,10),s.cloth(14209216),c,0,-1.35+x,0);let u=[];for(let[x,m]of[[.65,.65],[-.65,.6],[.6,-.65],[-.6,-.6],[.2,.75]]){let p=.12+Math.random()*.2;nt(new qt(.03,.035,p,8),s.wax,t,x,.48+p/2,m);let _=new Ui(s.flame);_.scale.set(.06,.12,1),_.position.set(x,.48+p+.05,m),t.add(_),u.push(_)}let d=new rn(16752720,1.6,9,1.6);d.position.set(0,1,0),t.add(d);let f=new Ui(s.glow.clone());f.scale.set(3.5,3.5,1),f.position.set(0,1,0),t.add(f);let g=new Ui(s.glow.clone());return g.material.color.set(16773320),g.material.opacity=0,g.scale.set(7,7,1),g.position.set(0,3.2,0),t.add(g),t.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),t.userData={swing:i,clap:l,rope:c,candles:u,light:d,halo:f,holy:g},t}function Fu(s){let t=new De,e=se(t),i=new Hi,n=Mi(Math.floor(Math.random()*1e6));for(let r of[-.48,0,.48])i.add(s.timber,Qt(.1,1.95,.08,r,.97,-.03,0,0,(n()-.5)*.02),.8);for(let r=0;r<9;r++){let a=.1+r*.215;i.add(s.planks,Qt(1.18-n()*.1,.16,.035,(n()-.5)*.06,a,.03,0,0,(n()-.5)*.08),.9)}return i.build(e),t.userData={pivot:e},t}function ku(s){let t=new De,e=new Hi,i=nt(new Zn(1.5,32),s.peat,t,0,.035,0,!1);i.rotation.x=-Math.PI/2;let n=nt(new Io(1.4,1.9,32),new de({color:854536,roughness:1,transparent:!0,opacity:.9}),t,0,.03,0,!1);n.rotation.x=-Math.PI/2;let r=-.2,a=0,o=[.21,.18,.15,.13];for(let p=0;p<4;p++){let v=(p%2?-1:1)*(.06+Math.random()*.06),M=new qt(o[p]*.9,o[p],.95*1.06,9);M.applyMatrix4(new Kt().makeRotationZ(v)),M.translate(a-Math.sin(v)*.95/2,r+.95/2,0),e.add(s.bark,M),a+=-Math.sin(v)*.95,r+=.95*Math.cos(v)}let l=r-.12,c=1.35,h=new qt(.09,.11,c,8);h.rotateZ(Math.PI/2-.08),h.translate(a+c/2-.05,l,0),e.add(s.bark,h);let u=new qt(.06,.07,.95,7);u.rotateZ(-.8),u.translate(a+.32,l-.33,0),e.add(s.bark,u);for(let p=0;p<5;p++){let _=p/5*Math.PI*2+.4,v=new Ti(.09,.9,5);v.rotateZ(Math.PI/2-.35),v.rotateY(-_),v.translate(Math.cos(_)*.35,.05,Math.sin(_)*.35),e.add(s.bark,v)}e.build(t);let d=new C(a+c-.15,l-.05,0);for(let p=0;p<9;p++){let _=nt(new Ye(.035,.009,5,10),s.iron,t,d.x,d.y-.06-p*.062,0);_.rotation.y=p%2?Math.PI/2:0}let f=d.y-.62;nt(new Ye(.09,.018,6,16,Math.PI*1.4),s.iron,t,d.x,f-.06,0).rotation.set(0,Math.PI/2,Math.PI*.8);for(let p=0;p<30;p++){let _=Math.random()*Math.PI*2,v=1.4+Math.random()*.7,M=.5+Math.random()*.9;nt(new Ti(.012,M,3),s.reed,t,Math.cos(_)*v,M/2,Math.sin(_)*v,!1).rotation.set((Math.random()-.5)*.3,0,(Math.random()-.5)*.3)}let x=new de({color:9077362,roughness:.8});for(let p=0;p<4;p++)nt(new qt(.018,.022,.32,6),x,t,(Math.random()-.5)*2,.04,(Math.random()-.5)*2).rotation.set(Math.PI/2,Math.random()*3,0);let m=se(t,d.x,0,0);for(let p=0;p<7;p++){let _=p/7*Math.PI*2;nt(new Ti(.07,2,6),s.tendril,m,Math.cos(_)*.55,1,Math.sin(_)*.55).rotation.set(Math.sin(_)*.35,0,-Math.cos(_)*.35)}return m.scale.set(1,.001,1),m.visible=!1,t.userData={hangPoint:new C(d.x,f,0),tendrils:m},t}function Bu(s){let t=new De,e=new Hi;for(let l of[-1,1])e.add(s.stone,Qt(.8,3.4,.9,l*2.25,1.7,0),.5),e.add(s.stone,Qt(1,.3,1.1,l*2.25,3.5,0),.5);for(let l of[-1,1])e.add(s.planks,Qt(5.8,.08,1.6,0,4.15,l*.62,0,l*.62,0),.5);e.add(s.timber,Qt(5.8,.2,.2,0,4.62,0),.6),e.add(s.timber,Qt(4,.25,.25,0,3.55,0),.6),e.add(s.stoneClean,Qt(.5,1,.5,3.4,.5,1.2),.6),e.build(t);let i=[];for(let l of[-1,1]){let c=se(t,l*1.85,0,0),h=new Hi;for(let u=0;u<8;u++)h.add(s.iron,Qt(.04,2.6,.04,-l*(.12+u*.22),1.4,0),1);for(let u of[.3,1.4,2.6])h.add(s.iron,Qt(1.8,.07,.06,-l*.9,u,0),1);h.add(s.iron,Qt(1.6,.05,.05,-l*.9,1.4,0,0,0,l*.55),1),h.build(c),i.push(c)}let n=se(t,3.4,1,1.2);nt(new qt(.03,.03,.6,8),s.iron,n,0,.3,0),nt(new Ue(.06,8,8),s.iron,n,0,.6,0),n.rotation.x=-.6;let r=[];for(let l=0;l<3;l++){let c=nt(new ee(.16,.24,.16),s.lanternGlass,t,-.8+l*.8,3.25,.2,!1);nt(new ee(.2,.04,.2),s.iron,t,-.8+l*.8,3.39,.2),r.push(c)}let a=new rn(16728096,0,10,1.6);a.position.set(0,3,.8),t.add(a);let o=new Ui(s.glow.clone());return o.material.color.set(14215423),o.material.opacity=0,o.scale.set(10,8,1),o.position.set(0,2,-4),t.add(o),t.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),t.userData={doors:i,lever:n,lamps:r,light:a,beyond:o},t}function Ou(s){let t=new De,e=nt(new qt(.9,1,.5,20,1,!0),s.stone,t,0,.25,0);e.material=s.stone.clone(),e.material.side=ge,nt(new Ye(.95,.12,8,24),s.stone,t,0,.5,0).rotation.x=Math.PI/2;let i=nt(new Zn(.9,24),new ci({color:10139864}),t,0,.3,0,!1);i.rotation.x=-Math.PI/2;let n=new Ui(s.glow.clone());n.material.color.set(11061503),n.material.opacity=.7,n.scale.set(4,4,1),n.position.y=1,t.add(n);let r=new rn(10139903,3,10,1.5);return r.position.y=1.2,t.add(r),t}function sc(s){let t=new Ti(.75,2.6,18,6,!0),e=t.attributes.position;for(let r=0;r<e.count;r++){let a=e.getY(r),o=Math.atan2(e.getZ(r),e.getX(r)),l=(1.3-a)/2.6;e.setX(r,e.getX(r)*(1+Math.sin(o*7)*.08*l)),e.setZ(r,e.getZ(r)*(1+Math.sin(o*7)*.08*l))}t.computeVertexNormals();let i=new ue(t,s.shroud);i.position.y=1.3,i.castShadow=!0;let n=new De;return n.add(i),n}function pr(s){let t=Mi(s),e=[],i=new C(0,1,0);function n(o,l,c,h,u){let f=o.clone(),g=l.clone();for(let m=0;m<3;m++){let p=c/3,_=h*(1-m/3*.45),v=h*(1-(m+1)/3*.45),M=new qt(v,_,p*1.05,u>1?7:4,1);M.translate(0,p/2,0);let R=new Qe().setFromUnitVectors(i,g.clone().normalize());M.applyQuaternion(R),M.translate(f.x,f.y,f.z),e.push(M),f=f.add(g.clone().normalize().multiplyScalar(p)),g.x+=(t()-.5)*.5,g.z+=(t()-.5)*.5,g.y+=.05,g.normalize()}if(u<=0||h<.02)return;let x=2+Math.floor(t()*2);for(let m=0;m<x;m++){let p=t()*Math.PI*2,_=.5+t()*.7,v=new C(Math.cos(p)*Math.sin(_),Math.cos(_),Math.sin(p)*Math.sin(_)).lerp(g,.3).normalize();n(f.clone(),v,c*(.55+t()*.2),h*.6,u-1)}}let r=4+t()*3;n(new C(0,-.3,0),new C((t()-.5)*.2,1,(t()-.5)*.2),r,.22+t()*.12,3);for(let o=0;o<5;o++){let l=o/5*Math.PI*2+t(),c=new Ti(.12,.9,5);c.rotateZ(Math.PI/2-.25),c.rotateY(-l),c.translate(Math.cos(l)*.3,.05,Math.sin(l)*.3),e.push(c)}return hn(e.map(o=>o.index?o.toNonIndexed():o),!1)}function zu(s,t=1,e=.7,i=1){let n=new Lo(1,3),r=new Fi(s),a=n.attributes.position;for(let o=0;o<a.count;o++){let l=new C(a.getX(o),a.getY(o),a.getZ(o)),c=1+r.fbm(l.x*1.5+l.z,l.y*1.5+l.x,4)*.35;l.multiplyScalar(c),l.x*=t,l.y*=e,l.z*=i,l.y<-.1&&(l.y=-.1),a.setXYZ(o,l.x,l.y,l.z)}return n.computeVertexNormals(),n}function Hu(){let s=new ee(.55,.8,.12);s.translate(0,.4,0);let t=new qt(.275,.275,.12,16,1,!1,0,Math.PI);t.rotateX(Math.PI/2),t.rotateZ(Math.PI/2),t.translate(0,.8,0);let e=hn([s.toNonIndexed(),t.toNonIndexed()]),i=new ee(.12,1.1,.12);i.translate(0,.55,0);let n=new ee(.55,.12,.12);n.translate(0,.78,0);let r=hn([i.toNonIndexed(),n.toNonIndexed()]),a=new qt(.08,.2,1.5,4);a.translate(0,.75,0);let o=new ee(.45,.25,.45);o.translate(0,.12,0);let l=hn([a.toNonIndexed(),o.toNonIndexed()]);return[e,r,l]}var jt=50,ei=.5,Pt=Math.ceil((jt*2+4)/ei),di=-(jt+2),Gi=0,In=1,mr=2,$o=3,Jo=class{constructor(t,e,i,n,r){this.scene=t,this.M=e,this.T=i,this.seed=n,this.quality=r,this.rnd=Mi(n),this.noise=new Fi(n),this.root=new De,t.add(this.root),this.boxes=[],this.circles=[],this.dynBoxes=[],this.windows=[],this.palletSpots=[],this.bellSpots=[],this.postSpots=[],this.gateSpots=[],this.bucket=new Hi,this.occupied=[],this.grid=new Uint8Array(Pt*Pt),this.gridObj=new Int16Array(Pt*Pt).fill(-1),this.build()}dispose(){this.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&t.geometry.dispose()})}addBox(t,e,i,n,r,a,o,l="wall",c=.36,h=!0){let u={minX:t,maxX:e,minY:i,maxY:n,minZ:r,maxZ:a,kind:l,sight:l!=="nosight"};return this.boxes.push(u),h&&o&&this.bucket.add(o,Qt(e-t,n-i,a-r,(t+e)/2,(i+n)/2,(r+a)/2),c),u}wall(t,e,i,n,r={}){let a=r.h??2.8,o=r.t??.55,l=r.mat??this.M.stone,c=r.ruin??.7,h=Math.abs(n-e)<1e-6,u=Math.abs(h?i-t:n-e),d=Math.sign(h?i-t:n-e),f=M=>h?[t+d*M,e]:[t,e+d*M],g=(r.openings||[]).slice().sort((M,R)=>M.at-R.at),x=[],m=0;for(let M of g)x.push([m,M.at-M.w/2]),m=M.at+M.w/2;x.push([m,u]);let p=(M,R,T,E,P="wall",y=l,w=!0)=>{if(R-M<.02)return;let[U,k]=f(M),[Y,L]=f(R);h?this.addBox(Math.min(U,Y),Math.max(U,Y),T,E,k-o/2,k+o/2,y,P,.36,!!y):this.addBox(U-o/2,U+o/2,T,E,Math.min(k,L),Math.max(k,L),y,P,.36,!!y)},_=this.rnd()*100,v=M=>{if(r.even)return a-this.rnd()*c*.15;let[R,T]=f(M),E=this.noise.noise((R+T)*.17+_,_*.3)*.5+.5,P=Math.max(0,this.noise.noise((R-T)*.09+_,7.7)-.3)*2.2;return Math.max(.9,a-c*(.1+E*.8)-P*c*.7+(this.rnd()-.5)*.18)};for(let[M,R]of x){let T=Math.max(1,Math.round((R-M)/.6));for(let E=0;E<T;E++){let P=M+(R-M)*E/T,y=M+(R-M)*(E+1)/T,w=v((P+y)/2),[U,k]=f(P),[Y,L]=f(y),D=(U+Y)/2,F=(k+L)/2,G=Math.abs(y-P)+.002;this.bucket.add(l,Qt(h?G:o,w,h?o:G,D,w/2,F),.36),p(P,y,0,w,"wall",null),this.rnd()<.18&&w>1.4&&this.bucket.add(l,Qt(.25+this.rnd()*.25,.18,Math.min(o,.35),D+(this.rnd()-.5)*.2,w+.06,F,this.rnd(),0,(this.rnd()-.5)*.5),.36)}if(!r.even&&R-M>1.5)for(let E=0;E<Math.floor((R-M)/2.5);E++){let P=M+this.rnd()*(R-M),y=this.rnd()<.5?-1:1,[w,U]=f(P),k=(o/2+.15+this.rnd()*.3)*y,Y=.15+this.rnd()*.25;this.bucket.add(l,Qt(Y*1.4,Y,Y,w+(h?0:k),Y/2-.03,U+(h?k:0),this.rnd()*3,this.rnd()*.4,this.rnd()*.4),.36)}}for(let M of g){let[R,T]=f(M.at),E=h?0:1,P=h?1:0,y=h?1:0,w=h?0:1;if(M.type==="window"){p(M.at-M.w/2,M.at+M.w/2,0,.88,"sill"),a>2.6&&p(M.at-M.w/2-.05,M.at+M.w/2+.05,2.2,a-this.rnd()*.3);for(let U of[-1,1]){let k=R+y*U*(M.w/2-.06),Y=T+w*U*(M.w/2-.06);this.bucket.add(this.M.timber,Qt(h?.1:o+.06,1.35,h?o+.06:.1,k,1.55,Y),.7)}this.windows.push({x:R,z:T,nx:E,nz:P,ax:y,az:w,halfW:M.w/2,id:this.windows.length})}else a>2.7&&M.type!=="open"&&p(M.at-M.w/2-.05,M.at+M.w/2+.05,2.35,a-this.rnd()*.2),M.type==="pallet"&&this.palletSpots.push({x:R,z:T,ax:y,az:w,nx:E,nz:P,w:M.w})}}occupy(t,e,i){this.occupied.push({x:t,z:e,r:i})}isFree(t,e,i){if(Math.abs(t)>jt-i-1||Math.abs(e)>jt-i-1)return!1;for(let n of this.occupied)if(Math.hypot(n.x-t,n.z-e)<n.r+i)return!1;return!0}build(){let t=this.rnd,e=this.M;this.buildGround(),this.buildBoundary(),this.buildChurch(),this.bellSpots.push({x:4.5,z:0,rot:Math.PI/2});let i=t()*Math.PI*2;for(let c=0;c<6;c++)for(let h=0;h<30;h++){let u=i+c/6*Math.PI*2+(t()-.5)*.5,d=27+t()*12,f=Math.cos(u)*d,g=Math.sin(u)*d;if(this.isFree(f,g,5)&&!this.gateSpots.some(x=>Math.hypot(x.x-f,x.z-g)<14)){this.bellSpots.push({x:f,z:g,rot:Math.floor(t()*4)*Math.PI/2}),this.occupy(f,g,4);break}}for(let c of this.bellSpots){let{x:h,z:u}=c,d=Math.round(c.rot/(Math.PI/2))%2===1;this.addBox(h-.85,h+.85,0,.5,u-.85,u+.85,null,"prop",0,!1);for(let f of[-1,1])d?this.addBox(h-.12,h+.12,0,3.4,u+f*.6-(f>0?0:.25),u+f*.6+(f>0?.25:0),null,"nosight",0,!1):this.addBox(h+f*.6-(f>0?0:.25),h+f*.6+(f>0?.25:0),0,3.4,u-.12,u+.12,null,"nosight",0,!1)}let n=t()*Math.PI*2;for(let c=0;c<6;c++)for(let h=0;h<40;h++){let u=n+c/6*Math.PI*2+(t()-.5)*.6,d=c%2?18+t()*5:38+t()*6,f=Math.cos(u)*d,g=Math.sin(u)*d;if(this.isFree(f,g,3.5)){this.postSpots.push({x:f,z:g,rot:t()*Math.PI*2}),this.occupy(f,g,3),this.circles.push({x:f,z:g,r:.2,h:3.6});break}}let r=["longWindow","lPallet","tWindow","shack","peat","corner","lPallet","longWindow","shack","peat","tWindow","corner"],a=0,o=[];for(let c=-42;c<=42;c+=12)for(let h=-42;h<=42;h+=12)o.push([c+(t()-.5)*5,h+(t()-.5)*5]);o.sort(()=>t()-.5);let l=0;for(let[c,h]of o){if(l>=22)break;this.isFree(c,h,5.5)&&(this.tile(r[a++%r.length],c,h,Math.floor(t()*4)),this.occupy(c,h,5.5),l++)}this.buildGraveyard(),this.buildTrees(),this.buildRocks(),this.buildPools(),this.bucket.build(this.root),this.buildNav(),this.buildGrass(),this.buildSky(),this.buildMist(),this.spawns()}buildGround(){let t=jt*2+40,e=140,i=new sn(t,t,e,e);i.rotateX(-Math.PI/2);let n=i.attributes.position,r=new Float32Array(n.count*3);for(let o=0;o<n.count;o++){let l=n.getX(o),c=n.getZ(o),h=this.noise.fbm(l*.03,c*.03,4),u=this.noise.fbm(l*.12+50,c*.12,3),d=Math.max(Math.abs(l),Math.abs(c))>jt+1?.04*this.noise.noise(l*.2,c*.2)+.15:0;n.setY(o,h*.05-.035+d);let f=.72+h*.35+u*.12;r[o*3]=f,r[o*3+1]=f*(.98+u*.05),r[o*3+2]=f*.95}i.setAttribute("color",new _e(r,3)),i.computeVertexNormals(),dr(i,1/3.2);let a=new ue(i,this.M.ground);a.receiveShadow=!0,this.root.add(a)}buildBoundary(){let t=this.rnd,e=(t()-.5)*50,i=(t()-.5)*50;this.gateSpots.push({x:e,z:jt+.3,out:1},{x:i,z:-jt-.3,out:-1});let n={h:3.4,t:.8,ruin:.9},r=jt+.7;this.wall(-r,r,r,r,{...n,openings:[{at:e+r,w:3.7,type:"open"}]}),this.wall(-r,-r,r,-r,{...n,openings:[{at:i+r,w:3.7,type:"open"}]}),this.wall(r,-r,r,r,n),this.wall(-r,-r,-r,r,n);for(let a of this.gateSpots){for(let o of[-1,1])this.addBox(a.x+o*2.25-.4,a.x+o*2.25+.4,0,3.4,a.z-.45,a.z+.45,null,"wall",0,!1);this.occupy(a.x,a.z-a.out*3,6)}}buildChurch(){let t=this.M,e={h:5.2,t:.75,ruin:2.2};this.wall(-11,6.5,11,6.5,{...e,openings:[{at:6,w:1.3,type:"window"},{at:15,w:1.3,type:"window"},{at:19.5,w:1.6,type:"pallet"}]}),this.wall(-11,-6.5,11,-6.5,{...e,openings:[{at:4,w:1.3,type:"window"},{at:11,w:2.2,type:"door"},{at:17,w:1.3,type:"window"}]}),this.wall(-11,-6.5,-11,6.5,{...e,openings:[{at:6.5,w:1.6,type:"pallet"}]}),this.wall(11,-6.5,11,6.5,{...e,h:6.5,ruin:1.5}),this.wall(-15,-10.5,-11,-10.5,{h:7,t:.8,ruin:2.5}),this.wall(-15,-10.5,-15,-6.5,{h:7.5,t:.8,ruin:2.5,openings:[{at:2,w:1.3,type:"window"}]}),this.wall(-15,-6.5,-12.2,-6.5,{h:6,t:.8,ruin:2});for(let i=-10.5;i<10.5;i+=1.5)for(let n=-6;n<6;n+=1.5)this.rnd()<.12||this.bucket.add(t.stoneClean,Qt(1.45,.06,1.45,i+.75,.03+this.rnd()*.02,n+.75,(this.rnd()-.5)*.05),.6);this.addBox(8.6,10.2,0,1.05,-1.4,1.4,t.stoneClean,"wall",.6),this.bucket.add(t.stoneClean,Qt(1.9,.2,3.2,9.4,1.1,0),.6),this.addBox(7.6,10.6,0,.18,-2.2,2.2,t.stoneClean,"prop",.6);for(let i of[-8.5,-5.8,-3.1])for(let n of[-1,1]){if(this.rnd()<.25)continue;let r=3.2-this.rnd()*1.2,a=n>0?1.3:-1.3-r;this.addBox(i,i+.5,0,.5,a,a+r,t.planks,"nosight",.8),this.bucket.add(t.planks,Qt(.08,.6,r,i+.48,.8,a+r/2,0,0,-.15),.8)}for(let i=0;i<4;i++){let n=-8+i*5+this.rnd()*2;this.bucket.add(t.timber,Qt(.35,.35,13.5,n,4.9+this.rnd()*.3,0,0,0,(this.rnd()-.5)*.1),.6)}this.bucket.add(t.timber,Qt(.35,.35,9,-2,1.6,-1,.5,.32,0),.6),this.altarCandles=[];for(let i=0;i<6;i++)this.altarCandles.push(new C(9.4,1.3,-1.2+i*.48));this.occupy(0,0,13),this.occupy(-13,-8.5,3.5)}tile(t,e,i,n){let r=[1,0,-1,0][n],a=[0,1,0,-1][n],o=(h,u)=>[e+h*r-u*a,i+h*a+u*r],l=(h,u,d,f,g)=>{let[x,m]=o(h,u),[p,_]=o(d,f);this.wall(x,m,p,_,g)},c=this.M;switch(t){case"longWindow":l(-4,0,4,0,{openings:[{at:4,w:1.3,type:"window"}]}),l(-4,.3,-4,2.8,{h:2.4});break;case"lPallet":l(-4,0,4,0,{openings:[{at:5.2,w:1.6,type:"pallet"}]}),l(-4,.3,-4,3.8,{});break;case"tWindow":l(-3.8,0,3.8,0,{}),l(0,.3,0,5.2,{openings:[{at:2.9,w:1.3,type:"window"}]});break;case"shack":{let h={h:2.9,t:.25,mat:c.planks,ruin:.3,even:!0};l(-3,-2.3,3,-2.3,{...h,openings:[{at:3,w:1.3,type:"window"}]}),l(3,-2.3,3,2.3,h),l(3,2.3,-3,2.3,{...h,openings:[{at:1.6,w:1.4,type:"door"}]}),l(-3,2.3,-3,-2.3,{...h,openings:[{at:2.3,w:1.6,type:"pallet"}]});for(let f=0;f<5;f++){if(this.rnd()<.35)continue;let[g,x]=o(-2.4+f*1.2,0);this.bucket.add(c.planks,Qt(n%2?4.8:1.15,.06,n%2?1.15:4.8,g,3+this.rnd()*.15,x,0,(this.rnd()-.5)*.12,(this.rnd()-.5)*.12),.8)}let[u,d]=o(2.2,1.6);this.lanterns=this.lanterns||[],this.lanterns.push(new C(u,2.3,d));break}case"peat":{let h={h:1.45,t:1,mat:c.peatBlock,ruin:.25};l(-4,-1.6,4,-1.6,{...h,openings:[{at:4,w:1.6,type:"pallet"}]}),l(-4,1.6,4,1.6,{...h,openings:[{at:2.5,w:1.3,type:"door"}]}),l(-4.6,-1,-4.6,1,{...h,h:1.2});break}case"corner":l(-3.5,0,3.5,0,{h:3.6,ruin:1.6,openings:[{at:2.2,w:1.3,type:"window"}]}),l(3.5,.3,3.5,5,{h:3.6,ruin:1.6,openings:[{at:2.6,w:1.3,type:"window"}]});break}}buildGraveyard(){let t=Hu(),e=[[],[],[]],i=this.rnd;for(let o of[-1,1])for(let l=0;l<3;l++)for(let c=0;c<9;c++){if(i()<.3)continue;let h=-9+c*2.2+(i()-.5)*.5,u=o*(9+l*2.2)+(i()-.5)*.4;if(!this.isFree(h,u,.3))continue;let d=Math.floor(i()*3);e[d].push({x:h,z:u,ry:(i()-.5)*.3,rx:(i()-.5)*.25,rz:(i()-.5)*.2,s:.85+i()*.35}),this.addBox(h-.3,h+.3,0,.9,u-.12,u+.12,null,"nosight",0,!1)}let n=new Kt,r=new Qe,a=new An;e.forEach((o,l)=>{if(!o.length)return;dr(t[l],1.2);let c=new Ls(t[l],this.M.stoneClean,o.length);o.forEach((h,u)=>{r.setFromEuler(a.set(h.rx,h.ry,h.rz)),n.compose(new C(h.x,-.05,h.z),r,new C(h.s,h.s,h.s)),c.setMatrixAt(u,n)}),c.castShadow=!0,c.receiveShadow=!0,this.root.add(c)}),this.occupy(0,11,4),this.occupy(0,-11,4)}buildTrees(){let t=this.rnd,e=[pr(11),pr(23),pr(37),pr(51)],i=[[],[],[],[]],n=0;for(let o=0;o<900&&n<70;o++){let l=(t()-.5)*(jt*2-4),c=(t()-.5)*(jt*2-4);!this.isFree(l,c,1.6)||this.noise.fbm(l*.05,c*.05,2)<-.05&&t()<.7||(i[n%4].push({x:l,z:c,s:.8+t()*.6,r:t()*6.28}),this.circles.push({x:l,z:c,r:.3,h:6}),this.occupy(l,c,1.2),n++)}for(let o=0;o<160;o++){let l=t()*Math.PI*2,c=Math.floor(t()*4),h=(t()-.5)*(jt*2+30),u=jt+3+t()*14,d=c<2?h:c===2?u:-u,f=c<2?c===0?u:-u:h;this.gateSpots.some(g=>Math.hypot(g.x-d,g.z-f)<7)||i[o%4].push({x:d,z:f,s:1+t()*.9,r:l})}let r=new Kt,a=new Qe;i.forEach((o,l)=>{let c=new Ls(e[l],this.M.bark,o.length);o.forEach((h,u)=>{a.setFromAxisAngle(new C(0,1,0),h.r),r.compose(new C(h.x,0,h.z),a,new C(h.s,h.s,h.s)),c.setMatrixAt(u,r)}),c.castShadow=!0,c.receiveShadow=!0,this.root.add(c)})}buildRocks(){let t=this.rnd;for(let e=0,i=0;e<400&&i<26;e++){let n=(t()-.5)*(jt*2-6),r=(t()-.5)*(jt*2-6),a=.5+t()*1.3;if(!this.isFree(n,r,a+.5))continue;let o=zu(e*13+1,a*(1+t()*.6),a*(.5+t()*.5),a);o.rotateY(t()*6.28),o.translate(n,0,r),dr(o,.6),this.bucket.add(this.M.statue,o),a>.8&&this.circles.push({x:n,z:r,r:a*.9,h:a*.8}),this.occupy(n,r,a),i++}for(let e=0;e<12;e++){let i=(t()-.5)*90,n=(t()-.5)*90;if(!this.isFree(i,n,2))continue;let r=new qt(.16,.2,2.5+t()*2,8);r.rotateZ(Math.PI/2),r.rotateY(t()*6.28),r.translate(i,.15,n),this.bucket.add(this.M.bark,r)}}buildPools(){let t=this.rnd;this.pools=[];for(let e=0,i=0;e<200&&i<6;e++){let n=(t()-.5)*88,r=(t()-.5)*88,a=1.5+t()*2.5;if(!this.isFree(n,r,a+1))continue;let o=new Zn(a,28),l=o.attributes.position;for(let h=1;h<l.count;h++){let u=Math.atan2(l.getY(h),l.getX(h)),d=1+this.noise.noise(Math.cos(u)*2+e,Math.sin(u)*2)*.25;l.setX(h,l.getX(h)*d),l.setY(h,l.getY(h)*d)}let c=new ue(o,this.M.peat);c.rotation.x=-Math.PI/2,c.position.set(n,.02,r),c.receiveShadow=!0,this.root.add(c),this.pools.push({x:n,z:r,r:a}),this.occupy(n,r,a)}}buildGrass(){let t=this.quality==="low"?5e3:14e3,e=new sn(1,1);e.translate(0,.5,0);let i=e.clone();i.rotateY(Math.PI/2);let n=e.clone();n.rotateY(Math.PI/4);let r=hn([e,i,n]),a=r.attributes.normal;for(let g=0;g<a.count;g++)a.setXYZ(g,0,1,0);let o=new de({map:this.T.tuft,alphaTest:.42,side:ge,roughness:.95,metalness:0});this.quality!=="low"&&(o.alphaToCoverage=!0),this.grassUniforms={uTime:{value:0}},o.onBeforeCompile=g=>{g.uniforms.uTime=this.grassUniforms.uTime,g.vertexShader=`uniform float uTime;
`+g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float sway = sin(uTime * 1.6 + ip.x * 0.31 + ip.z * 0.23) * 0.6 + sin(uTime * 3.7 + ip.x * 1.3) * 0.25;
        transformed.x += sway * uv.y * uv.y * 0.12;
        transformed.z += sway * uv.y * uv.y * 0.07;`),g.fragmentShader=g.fragmentShader.replace("#include <normal_fragment_begin>",Ut.normal_fragment_begin.replace("normal *= faceDirection;",""))};let l=new Ls(r,o,t),c=new Kt,h=new Qe,u=new Mt,d=this.rnd,f=0;for(let g=0;g<t*5&&f<t;g++){let x=(d()-.5)*(jt*2),m=(d()-.5)*(jt*2),p=this.noise.fbm(x*.06+7,m*.06,3);if(p<-.15+d()*.3||Math.abs(x)<11&&Math.abs(m)<6.5)continue;let _=this.cellIndex(x,m);if(_<0||this.grid[_]!==Gi||this.pools.some(T=>Math.hypot(T.x-x,T.z-m)<T.r))continue;h.setFromAxisAngle(new C(0,1,0),d()*6.28);let v=.55+d()*.6,M=(.35+d()*.45)*(.75+p*.6);c.compose(new C(x,-.03,m),h,new C(v,M,v)),l.setMatrixAt(f,c);let R=.75+d()*.35;u.setRGB(R,R*(.95+d()*.1),R*.9),l.setColorAt(f,u),f++}l.count=f,l.receiveShadow=!0,this.root.add(l)}buildSky(){this.moonDir=new C(-.45,.42,-.78).normalize();let t=new Te({side:Ge,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uMoon:{value:this.moonDir},uFog:{value:this.scene.fog?this.scene.fog.color:new Mt(2501427)}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`
        varying vec3 vDir; uniform float uTime; uniform vec3 uMoon; uniform vec3 uFog;
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
          gl_FragColor = vec4(col, 1.0);
        }`});this.sky=new ue(new Ue(400,32,16),t),this.sky.frustumCulled=!1,this.sky.renderOrder=-1,this.scene.add(this.sky),this.root.userData.sky=this.sky}buildMist(){this.mistUniforms={uTime:{value:0},uCam:{value:new C}};let t=(e,i,n)=>{let r=new Te({transparent:!0,depthWrite:!1,fog:!1,uniforms:{...this.mistUniforms,uA:{value:i},uS:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`varying vec3 vW; uniform float uTime, uA, uS; uniform vec3 uCam;
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
          }`}),a=new ue(new sn(jt*2+30,jt*2+30),r);a.rotation.x=-Math.PI/2,a.position.y=e,a.renderOrder=5,this.root.add(a)};t(.25,.55,.06),t(.7,.35,.045),t(1.3,.18,.035)}pointInBox(t,e,i){for(let n of this.boxes)if(n.maxY>.3&&n.minY<1.9&&t>n.minX-i&&t<n.maxX+i&&e>n.minZ-i&&e<n.maxZ+i)return!0;for(let n of this.circles)if(Math.hypot(n.x-t,n.z-e)<n.r+i)return!0;return!1}collide(t,e,i=null){for(let n=0;n<2;n++){for(let r=0;r<2;r++){let a=r?this.dynBoxes:this.boxes;for(let o=0;o<a.length;o++){let l=a[o];if(l.maxY<.3||l.minY>1.9||l.ghost||t.x<l.minX-e||t.x>l.maxX+e||t.z<l.minZ-e||t.z>l.maxZ+e)continue;let c=ne(t.x,l.minX,l.maxX),h=ne(t.z,l.minZ,l.maxZ),u=t.x-c,d=t.z-h,f=Math.hypot(u,d);if(f<e)if(f<1e-5){let g=t.x-l.minX,x=l.maxX-t.x,m=t.z-l.minZ,p=l.maxZ-t.z,_=Math.min(g,x,m,p);_===g?t.x=l.minX-e:_===x?t.x=l.maxX+e:_===m?t.z=l.minZ-e:t.z=l.maxZ+e}else t.x=c+u/f*e,t.z=h+d/f*e}}for(let r=0;r<2;r++){let a=r?i:this.circles;if(a)for(let o=0;o<a.length;o++){let l=a[o],c=t.x-l.x,h=t.z-l.z,u=Math.hypot(c,h),d=l.r+e;u<d&&u>1e-5&&(t.x=l.x+c/u*d,t.z=l.z+h/u*d)}}}return t.x=ne(t.x,-jt-6,jt+6),t.z=ne(t.z,-jt-6,jt+6),t}raycast(t,e,i=0){let n=e.x-t.x,r=e.y-t.y,a=e.z-t.z,o=1,l=Math.min(t.x,e.x),c=Math.max(t.x,e.x),h=Math.min(t.z,e.z),u=Math.max(t.z,e.z);for(let d of this.boxes){if(!d.sight||d.maxY<=i||d.maxX<l||d.minX>c||d.maxZ<h||d.minZ>u)continue;let f=0,g=o,x=(m,p,_,v)=>{if(Math.abs(p)<1e-9)return m>=_&&m<=v;let M=(_-m)/p,R=(v-m)/p;if(M>R){let T=M;M=R,R=T}return f=Math.max(f,M),g=Math.min(g,R),f<=g};x(t.x,n,d.minX,d.maxX)&&x(t.y,r,d.minY,d.maxY)&&x(t.z,a,d.minZ,d.maxZ)&&(o=Math.min(o,f))}for(let d of this.circles){let f=t.x-d.x,g=t.z-d.z,x=n*n+a*a;if(x<1e-9)continue;let m=2*(f*n+g*a),p=f*f+g*g-d.r*d.r,_=m*m-4*x*p;if(_<0)continue;let v=(-m-Math.sqrt(_))/(2*x);v>0&&v<o&&t.y+r*v<d.h&&(o=v)}return o}lineOfSight(t,e){return this.raycast(t,e)>=.999}cellIndex(t,e){let i=Math.floor((t-di)/ei),n=Math.floor((e-di)/ei);return i<0||n<0||i>=Pt||n>=Pt?-1:n*Pt+i}cellCenter(t){return{x:di+(t%Pt+.5)*ei,z:di+(Math.floor(t/Pt)+.5)*ei}}rasterBox(t,e,i,n=-1,r=!1){let a=Math.max(0,Math.floor((t.minX-e-di)/ei)),o=Math.min(Pt-1,Math.floor((t.maxX+e-di)/ei)),l=Math.max(0,Math.floor((t.minZ-e-di)/ei)),c=Math.min(Pt-1,Math.floor((t.maxZ+e-di)/ei));for(let h=l;h<=c;h++)for(let u=a;u<=o;u++){let d=di+(u+.5)*ei,f=di+(h+.5)*ei,g=ne(d,t.minX,t.maxX),x=ne(f,t.minZ,t.maxZ);if(Math.hypot(d-g,f-x)>e)continue;let m=h*Pt+u;r&&this.grid[m]!==Gi||(this.grid[m]=i,this.gridObj[m]=n)}}buildNav(){this.grid.fill(Gi),this.gridObj.fill(-1);for(let e of this.boxes)if(e.kind==="sill"){let i=this.windows.find(n=>Math.abs(n.x-(e.minX+e.maxX)/2)<.8&&Math.abs(n.z-(e.minZ+e.maxZ)/2)<.8);this.rasterBox(e,.4,mr,i?i.id:-1)}for(let e of this.boxes)e.kind!=="sill"&&e.maxY>.3&&e.minY<1.9&&this.rasterBox(e,.4,In);for(let e of this.circles)this.rasterBox({minX:e.x-e.r,maxX:e.x+e.r,minZ:e.z-e.r,maxZ:e.z+e.r},.4,In);for(let e=0;e<Pt*Pt;e++){let i=this.cellCenter(e);(Math.abs(i.x)>jt+.3||Math.abs(i.z)>jt+.3)&&(this.grid[e]=In)}for(let e of this.gateSpots)this.rasterBox({minX:e.x-1.6,maxX:e.x+1.6,minZ:Math.min(e.z,e.z+e.out*4),maxZ:Math.max(e.z,e.z+e.out*4)},0,Gi);this.gateBlock=this.gateSpots.map(e=>({minX:e.x-1.9,maxX:e.x+1.9,minY:0,maxY:3,minZ:e.z-.15,maxZ:e.z+.15,kind:"gate"}));for(let e of this.gateBlock)this.dynBoxes.push(e),this.rasterBox(e,.4,In);this.heap=new Int32Array(Pt*Pt*5),this.gScore=new Float32Array(Pt*Pt),this.came=new Int32Array(Pt*Pt),this.stamp=new Uint32Array(Pt*Pt),this.closed=new Uint32Array(Pt*Pt),this.gen=1}openGateNav(t){let e=this.gateBlock[t];e.ghost=!0,this.rasterBox(e,.4,Gi);let i=this.gateSpots[t];for(let n of[-1,1])this.rasterBox({minX:i.x+n*2.25-.4,maxX:i.x+n*2.25+.4,minZ:i.z-.45,maxZ:i.z+.45},.4,In)}setPalletNav(t,e){let i=t.box;if(e)this.rasterBox(i,.4,$o,1e3+t.id,!0);else{let n=Math.max(0,Math.floor((i.minX-.5-di)/ei)),r=Math.min(Pt-1,Math.floor((i.maxX+.5-di)/ei)),a=Math.max(0,Math.floor((i.minZ-.5-di)/ei)),o=Math.min(Pt-1,Math.floor((i.maxZ+.5-di)/ei));for(let l=a;l<=o;l++)for(let c=n;c<=r;c++){let h=l*Pt+c;this.grid[h]===$o&&this.gridObj[h]===1e3+t.id&&(this.grid[h]=Gi,this.gridObj[h]=-1)}}}nearestFree(t){if(t>=0&&this.grid[t]===Gi)return t;let e=t%Pt,i=Math.floor(t/Pt);for(let n=1;n<12;n++)for(let r=-n;r<=n;r++)for(let a=-n;a<=n;a++){if(Math.abs(a)!==n&&Math.abs(r)!==n)continue;let o=e+a,l=i+r;if(o<0||l<0||o>=Pt||l>=Pt)continue;let c=l*Pt+o;if(this.grid[c]===Gi)return c}return-1}findPath(t,e,i,n,r="survivor",a=3e4){let o=this.nearestFree(this.cellIndex(t,e)),l=this.nearestFree(this.cellIndex(i,n));if(o<0||l<0)return null;let c=++this.gen,h=this.gScore,u=this.came,d=this.stamp,f=this.closed,g=this.heap,x=this._f||(this._f=new Float32Array(Pt*Pt)),m=0,p=l%Pt,_=Math.floor(l/Pt),v=D=>{let F=Math.abs(D%Pt-p),G=Math.abs(Math.floor(D/Pt)-_);return F+G+(1.4142-2)*Math.min(F,G)},M=D=>{if(m>=g.length)return;let F=m++;for(g[F]=D;F>0;){let G=F-1>>1;if(x[g[G]]<=x[D])break;g[F]=g[G],F=G}g[F]=D},R=()=>{let D=g[0],F=g[--m],G=0;for(;;){let W=2*G+1;if(W>=m)break;let q=W+1;if(q<m&&x[g[q]]<x[g[W]]&&(W=q),x[g[W]]>=x[F])break;g[G]=g[W],G=W}return g[G]=F,D};d[o]=c,h[o]=0,u[o]=-1,x[o]=v(o),M(o);let T=r==="killer"?5:2.5,E=r==="killer"?10:2,P=!1,y=0;for(;m>0&&y++<a;){let D=R();if(D===l){P=!0;break}if(f[D]===c)continue;f[D]=c;let F=D%Pt,G=D/Pt|0;for(let W=-1;W<=1;W++)for(let q=-1;q<=1;q++){if(!q&&!W)continue;let Z=F+q,J=G+W;if(Z<0||J<0||Z>=Pt||J>=Pt)continue;let st=J*Pt+Z,X=this.grid[st];if(X===In||q&&W&&(this.grid[G*Pt+Z]===In||this.grid[J*Pt+F]===In))continue;let $=q&&W?1.4142:1;if(X===mr){if(q&&W)continue;$+=T}else if(X===$o){if(q&&W)continue;$+=E}let ht=h[D]+$;(d[st]!==c||ht<h[st])&&(d[st]=c,h[st]=ht,u[st]=D,x[st]=ht+v(st),M(st))}}if(!P)return null;let w=[];for(let D=l;D!==-1;D=u[D])w.push(D);w.reverse();let U=[],k=0;for(;k<w.length;){let D=this.grid[w[k]];if(D===mr||D===$o){let F=this.gridObj[w[k]],G=k;for(;G<w.length&&this.grid[w[G]]===D&&this.gridObj[w[G]]===F;)G++;U.push({portal:{type:D===mr?"window":"pallet",id:D===mr?F:F-1e3},...this.cellCenter(w[Math.min(G,w.length-1)])}),k=G}else U.push(this.cellCenter(w[k])),k++}let Y=[],L={x:t,z:e};for(let D=0;D<U.length;D++){let F=U[D];if(F.portal){D>0&&!U[D-1].portal&&Y[Y.length-1]!==U[D-1]&&Y.push(U[D-1]),Y.push(F),L=F;continue}let G=U[D+1];(!G||G.portal||!this.walkable(L,G))&&(Y.push(F),L=F)}return Y.push({x:i,z:n,final:!0}),Y}walkable(t,e){let i=Math.hypot(e.x-t.x,e.z-t.z),n=Math.ceil(i/(ei*.5));for(let r=0;r<=n;r++){let a=t.x+(e.x-t.x)*r/n,o=t.z+(e.z-t.z)*r/n,l=this.cellIndex(a,o);if(l<0||this.grid[l]!==Gi)return!1}return!0}randomFreePoint(t=Math.random,e=0,i=jt-3,n=0,r=0){for(let a=0;a<200;a++){let o=t()*Math.PI*2,l=e+t()*(i-e),c=n+Math.cos(o)*l,h=r+Math.sin(o)*l;if(Math.abs(c)>jt-2||Math.abs(h)>jt-2)continue;let u=this.cellIndex(c,h);if(u>=0&&this.grid[u]===Gi)return{x:c,z:h}}return{x:n,z:r}}spawns(){let t=this.rnd()*Math.PI*2;this.survivorSpawn=this.randomFreePoint(this.rnd,0,4,Math.cos(t)*36,Math.sin(t)*36),this.killerSpawn=this.randomFreePoint(this.rnd,0,4,-Math.cos(t)*34,-Math.sin(t)*34),this.hatchSpot=this.randomFreePoint(this.rnd,15,40)}};var Le=(s,t)=>s+Math.random()*(t-s),Ko=class{constructor(){this.ctx=null,this.enabled=!1,this.volume=.8}init(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.enabled=!0,this.master=e.createGain(),this.master.gain.value=this.volume;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.knee.value=12,i.ratio.value=4,this.master.connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.9,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(3.2,2.6),this.reverbIn=e.createGain(),this.reverbIn.gain.value=.7,this.reverbIn.connect(this.reverb).connect(this.master),this.white=this._noiseBuffer(3,"white"),this.brown=this._noiseBuffer(4,"brown"),this.pink=this._noiseBuffer(4,"pink"),this._ambience(),this._music(),this.grinds=new Map}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_noiseBuffer(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),r=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a),l=0,c=0,h=0,u=0;for(let d=0;d<n;d++){let f=Math.random()*2-1;e==="brown"?(l=(l+.02*f)/1.02,o[d]=l*3.5):e==="pink"?(c=.997*c+f*.029591,h=.985*h+f*.032534,u=.95*u+f*.048056,o[d]=(c+h+u+f*.1848)*.6):o[d]=f}}return r}_impulse(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),r=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a),l=0;for(let c=0;c<n;c++){let h=c/n;l=l*.6+(Math.random()*2-1)*.4,o[c]=l*Math.pow(1-h,e)*(c<200?c/200:1)}}return r}setListener(t,e){if(!this.ctx)return;let i=this.ctx.listener,n=this.ctx.currentTime;i.positionX?(i.positionX.setTargetAtTime(t.x,n,.02),i.positionY.setTargetAtTime(t.y,n,.02),i.positionZ.setTargetAtTime(t.z,n,.02),i.forwardX.setTargetAtTime(e.x,n,.02),i.forwardY.setTargetAtTime(e.y,n,.02),i.forwardZ.setTargetAtTime(e.z,n,.02),i.upX.value=0,i.upY.value=1,i.upZ.value=0):(i.setPosition(t.x,t.y,t.z),i.setOrientation(e.x,e.y,e.z,0,1,0))}_panner(t,e=2.5,i=1.1){let n=this.ctx.createPanner();return n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=e,n.rolloffFactor=i,n.maxDistance=120,n.positionX?(n.positionX.value=t.x,n.positionY.value=t.y,n.positionZ.value=t.z):n.setPosition(t.x,t.y,t.z),n}_dest(t,e=.25,i,n){let r=this.ctx.createGain();if(t){let a=this._panner(t,i,n);r.connect(a),a.connect(this.sfx);let o=this.ctx.createGain();o.gain.value=e,a.connect(o),o.connect(this.reverbIn)}else{r.connect(this.sfx);let a=this.ctx.createGain();a.gain.value=e,r.connect(a),a.connect(this.reverbIn)}return setTimeout(()=>r.disconnect(),12e3),r}_env(t,e,i,n,r,a=1e-4){t.setValueAtTime(1e-4,e),t.exponentialRampToValueAtTime(Math.max(n,2e-4),e+i),t.exponentialRampToValueAtTime(a,e+i+r)}_osc(t,e,i,n,r,a,o=.005,l=n){let c=this.ctx.createOscillator();c.type=t,c.frequency.value=e;let h=this.ctx.createGain();return this._env(h.gain,i,o,a,l),c.connect(h).connect(r),c.start(i),c.stop(i+o+l+.05),c}_noise(t,e,i,{type:n="bandpass",f:r=1e3,q:a=1,gain:o=.5,a:l=.005,buf:c=this.white,fEnd:h}={}){let u=this.ctx.createBufferSource();u.buffer=c,u.loopStart=0,u.loop=!0;let d=this.ctx.createBiquadFilter();d.type=n,d.frequency.setValueAtTime(r,t),d.Q.value=a,h&&d.frequency.exponentialRampToValueAtTime(h,t+e);let f=this.ctx.createGain();return this._env(f.gain,t,l,o,e),u.connect(d).connect(f).connect(i),u.start(t,Math.random()*2),u.stop(t+l+e+.05),d}get now(){return this.ctx.currentTime}toll(t,e=196,i=.6,n=7){if(!this.enabled)return;let r=this.now+.01,a=this._dest(t,.9,8,.6),o=[[.5,.55,1],[1,.75,.8],[1.183,.5,.55],[1.506,.32,.5],[2,.5,.42],[2.514,.22,.3],[2.662,.2,.26],[3.011,.17,.22],[4.166,.1,.15],[5.433,.07,.1],[6.796,.04,.07]];for(let[l,c,h]of o)this._osc("sine",e*l*Le(.998,1.002),r,n*h,a,c*i*.35,.004),l<=1&&this._osc("sine",e*l+.7,r,n*h,a,c*i*.18,.004);this._noise(r,.05,a,{f:3200,q:.8,gain:i*.5})}chime(t,e=880,i=.25){if(!this.enabled)return;let n=this.now,r=this._dest(t,.5);for(let[a,o]of[[1,1],[2.76,.4],[5.4,.2]])this._osc("sine",e*a,n,1.5/a,r,i*o*.4)}creak(t,e=.25){if(!this.enabled)return;let i=this.now,n=this._dest(t,.2),r=this.ctx.createOscillator();r.type="sawtooth";let a=Le(38,60);r.frequency.setValueAtTime(a,i),r.frequency.linearRampToValueAtTime(a*Le(1.3,1.8),i+.35);let o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=Le(600,1100),o.Q.value=5;let l=this.ctx.createGain();this._env(l.gain,i,.05,e*.5,.35),r.connect(o).connect(l).connect(n),r.start(i),r.stop(i+.5)}footstep(t,e=.18,i=!1){if(!this.enabled)return;let n=this.now,r=this._dest(t,.05,1.5,1.6);this._noise(n,.07,r,{f:Le(900,1700),q:.9,gain:e*(i?.4:1)}),this._noise(n,.05,r,{type:"lowpass",f:250,q:.5,gain:e*1.2*(i?.4:1),buf:this.brown})}scream(t,e=1,i=.5,n=1.1){if(!this.enabled)return;let r=this.now,a=this._dest(t,.5,3,.9),o=330*e,l=this.ctx.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(o*.8,r),l.frequency.exponentialRampToValueAtTime(o*1.45,r+.12),l.frequency.exponentialRampToValueAtTime(o*1.2,r+n*.6),l.frequency.exponentialRampToValueAtTime(o*.75,r+n);let c=this.ctx.createOscillator();c.frequency.value=6.5;let h=this.ctx.createGain();h.gain.value=o*.05,c.connect(h).connect(l.frequency);let u=this.ctx.createGain();u.gain.setValueAtTime(1e-4,r),u.gain.exponentialRampToValueAtTime(i,r+.06),u.gain.setValueAtTime(i,r+n*.7),u.gain.exponentialRampToValueAtTime(1e-4,r+n);for(let[d,f,g]of[[850,7,1],[1250,8,.7],[2700,9,.35],[3500,10,.15]]){let x=this.ctx.createBiquadFilter();x.type="bandpass",x.frequency.value=d*(e>1?1.08:1),x.Q.value=f;let m=this.ctx.createGain();m.gain.value=g*2.2,l.connect(x).connect(m).connect(u)}u.connect(a),this._noise(r,n*.9,a,{f:2e3,q:.6,gain:i*.12}),l.start(r),c.start(r),l.stop(r+n+.1),c.stop(r+n+.1)}groan(t,e=1,i=.15){if(!this.enabled)return;let n=this.now,r=this._dest(t,.2,2,1.2),a=Le(.4,.7),o=this.ctx.createOscillator();o.type="sawtooth";let l=150*e;o.frequency.setValueAtTime(l*1.1,n),o.frequency.linearRampToValueAtTime(l*.85,n+a);let c=this.ctx.createGain();this._env(c.gain,n,.08,i,a);for(let[h,u]of[[500,1],[900,.5]]){let d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.value=h,d.Q.value=6;let f=this.ctx.createGain();f.gain.value=u*2,o.connect(d).connect(f).connect(c)}c.connect(r),o.start(n),o.stop(n+a+.1)}hit(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.3),n=this.ctx.createOscillator();n.frequency.setValueAtTime(130,e),n.frequency.exponentialRampToValueAtTime(38,e+.2);let r=this.ctx.createGain();this._env(r.gain,e,.003,.9,.25),n.connect(r).connect(i),n.start(e),n.stop(e+.3),this._noise(e,.14,i,{type:"lowpass",f:2200,gain:.6}),this._noise(e,.09,i,{f:5e3,q:1,gain:.3,fEnd:2e3})}palletDrop(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.45,4,.8),n=this.ctx.createOscillator();n.frequency.setValueAtTime(85,e),n.frequency.exponentialRampToValueAtTime(32,e+.35);let r=this.ctx.createGain();this._env(r.gain,e,.003,1.1,.4),n.connect(r).connect(i),n.start(e),n.stop(e+.5),this._noise(e,.09,i,{f:1500,q:.7,gain:.7});for(let a of[190,310,470,640])this._osc("sine",a*Le(.95,1.05),e,.18,i,.25)}palletBreak(t){if(this.enabled)for(let e=0;e<5;e++){let i=this.now+e*Le(.06,.12),n=this._dest(t,.4,4,.8);this._noise(i,Le(.05,.12),n,{f:Le(500,2200),q:1.2,gain:.7}),this._osc("sine",Le(160,420),i,.12,n,.3)}}vault(t,e=!1){if(!this.enabled)return;let i=this.now,n=this._dest(t,.15);this._noise(i,.32,n,{f:400,fEnd:1800,q:1.2,gain:e?.45:.18,a:.12}),this._noise(i+.3,.07,n,{type:"lowpass",f:300,gain:e?.8:.3,buf:this.brown})}skillWarn(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.1);this._osc("sine",1480,t,.18,e,.22),this._osc("sine",2220,t,.12,e,.08)}skillGood(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.2);this._noise(t,.01,e,{type:"highpass",f:3e3,gain:.3}),this._osc("sine",880,t,.25,e,.12)}skillGreat(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.4);for(let i of[1320,1760,2640])this._osc("sine",i,t,.6,e,.09)}uiClick(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.05);this._osc("triangle",660,t,.06,e,.08)}crack(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.8,12,.5);for(let a of[1,1.37,2.11,2.93,3.7])this._osc("triangle",150*a*Le(.98,1.02),e,1.1/Math.sqrt(a),i,.35/a);this._noise(e,.25,i,{f:1400,q:.5,gain:.9,fEnd:500});let n=this.ctx.createOscillator();n.frequency.setValueAtTime(70,e),n.frequency.exponentialRampToValueAtTime(30,e+.5);let r=this.ctx.createGain();this._env(r.gain,e,.002,1.2,.55),n.connect(r).connect(i),n.start(e),n.stop(e+.7)}chains(t,e=8){if(this.enabled)for(let i=0;i<e;i++){let n=this.now+i*Le(.04,.1),r=this._dest(t,.3);for(let a of[2400,3650,5100])this._osc("sine",a*Le(.9,1.15),n,Le(.05,.12),r,.07)}}gurgle(t,e=10,i=1.5){if(this.enabled)for(let n=0;n<e;n++){let r=this.now+Math.random()*i,a=this._dest(t,.3,2,1.2),o=this.ctx.createOscillator();o.frequency.setValueAtTime(Le(120,260),r),o.frequency.exponentialRampToValueAtTime(Le(500,900),r+.04);let l=this.ctx.createGain();this._env(l.gain,r,.004,.25,.05),o.connect(l).connect(a),o.start(r),o.stop(r+.1)}}boom(t,e=48,i=1){if(!this.enabled)return;let n=this.now,r=this._dest(t,.9,10,.5),a=this.ctx.createOscillator();a.frequency.setValueAtTime(e*1.6,n),a.frequency.exponentialRampToValueAtTime(e*.6,n+2);let o=this.ctx.createGain();this._env(o.gain,n,.01,i,2.2),a.connect(o).connect(r),a.start(n),a.stop(n+2.4),this._noise(n,1.4,r,{type:"lowpass",f:200,gain:i*.8,buf:this.brown})}stoneShift(t,e=.5){if(!this.enabled)return;let i=this.now,n=this._dest(t,.6,4,.9);this._noise(i,1.2,n,{f:220,q:1.5,gain:e,a:.1,buf:this.brown,fEnd:120});let r=this.ctx.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(42,i),r.frequency.linearRampToValueAtTime(30,i+1.4);let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=180;let o=this.ctx.createGain();this._env(o.gain,i,.2,e*.6,1.3),r.connect(a).connect(o).connect(n),r.start(i),r.stop(i+1.7)}settle(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.1,1.5,1.8);for(let n=0;n<3;n++)this._noise(e+n*.03,.02,i,{f:Le(2500,4500),q:2,gain:.12})}blink(){if(!this.enabled)return;let t=this.now,e=this._dest(null,0);this._noise(t,.2,e,{type:"lowpass",f:500,gain:.08,a:.05,buf:this.pink})}ironGate(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.7,6,.6),n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(310,e),n.frequency.linearRampToValueAtTime(240,e+1.8);let r=this.ctx.createOscillator();r.frequency.value=11;let a=this.ctx.createGain();a.gain.value=9,r.connect(a).connect(n.frequency);let o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1300,o.Q.value=14;let l=this.ctx.createGain();this._env(l.gain,e,.3,.5,1.6),n.connect(o).connect(l).connect(i),n.start(e),r.start(e),n.stop(e+2.1),r.stop(e+2.1),this._noise(e,2,i,{type:"lowpass",f:160,gain:.6,buf:this.brown,a:.3})}escapeChord(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.9);for(let i of[220,277.2,329.6,440,554.4])this._osc("sine",i,t,3.5,e,.06,1.2)}crow(){if(!this.enabled||!this.listenerPos)return;let t=Math.random()*Math.PI*2,e={x:this.listenerPos.x+Math.cos(t)*30,y:12,z:this.listenerPos.z+Math.sin(t)*30},i=2+Math.floor(Math.random()*3);for(let n=0;n<i;n++){let r=this.now+n*Le(.35,.5),a=this._dest(e,.6,6,.6),o=this.ctx.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(Le(700,900),r),o.frequency.exponentialRampToValueAtTime(Le(420,520),r+.25);let l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=1150,l.Q.value=3;let c=this.ctx.createGain();this._env(c.gain,r,.02,.18,.25),o.connect(l).connect(c).connect(a),o.start(r),o.stop(r+.35)}}_loopNoise(t,e,i,n,r,a){let o=this.ctx.createBufferSource();o.buffer=t,o.loop=!0;let l=this.ctx.createBiquadFilter();l.type=e,l.frequency.value=i,l.Q.value=n;let c=this.ctx.createGain();return c.gain.value=r,o.connect(l).connect(c).connect(a),o.start(),{s:o,fl:l,g:c}}_lfo(t,e,i,n="sine"){let r=this.ctx.createOscillator();r.type=n,r.frequency.value=t;let a=this.ctx.createGain();return a.gain.value=e,r.connect(a).connect(i),r.start(),r}_ambience(){let t=this.ctx.createGain();t.gain.value=1,t.connect(this.master),this.ambBus=t;let e=this._loopNoise(this.pink,"lowpass",420,.7,.22,t);this._lfo(.06,260,e.fl.frequency),this._lfo(.045,.1,e.g.gain);let i=this._loopNoise(this.white,"bandpass",1300,9,.012,t);this._lfo(.11,500,i.fl.frequency),this._lfo(.07,.01,i.g.gain);let n=this.ctx.createGain();n.gain.value=.03,n.connect(t);for(let r of[41.2,41.6,61.7,82.6]){let a=this.ctx.createOscillator();a.frequency.value=r,a.connect(n),a.start()}this.breath=this._loopNoise(this.pink,"bandpass",900,1.2,0,this.sfx),this.breathLfo=this._lfo(.55,0,this.breath.g.gain),this.hiss=this._loopNoise(this.white,"bandpass",4200,3,0,this.sfx),this._lfo(7,0,this.hiss.g.gain)}_music(){let t=this.ctx;this.chase=t.createGain(),this.chase.gain.value=0,this.chase.connect(this.musicBus);let e=t.createGain();e.gain.value=0;let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=320,i.Q.value=3;for(let l of[55,58.27,82.4]){let c=t.createOscillator();c.type="sawtooth",c.frequency.value=l,c.connect(i),c.start()}i.connect(e).connect(this.chase);let n=t.createOscillator();n.type="square",n.frequency.value=2.2;let r=t.createGain();r.gain.value=.11,n.connect(r).connect(e.gain),n.start(),e.gain.value=.12,this.high=t.createGain(),this.high.gain.value=0,this.high.connect(this.chase);let a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=2100,a.Q.value=1.2;let o=t.createGain();o.gain.value=.03;for(let l of[880,932.3,1396.9]){let c=t.createOscillator();c.type="sawtooth",c.frequency.value=l;let h=this._lfo(5,3,c.frequency);c.connect(a),c.start()}a.connect(o).connect(this.high),this._lfo(9,.03,o.gain,"triangle"),this.nextDrum=0}grind(t,e,i){if(!this.enabled)return;let n=this.grinds.get(t);if(!n){let o=this._panner(e,3,1.25),l=this.ctx.createBufferSource();l.buffer=this.brown,l.loop=!0;let c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=170,c.Q.value=1.1;let h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.value=900,h.Q.value=2.5;let u=this.ctx.createGain();u.gain.value=0;let d=this.ctx.createGain();d.gain.value=.45,l.connect(c).connect(u),l.connect(h).connect(d).connect(u),u.connect(o).connect(this.sfx),l.start(),n={p:o,gain:u,f1:c},this.grinds.set(t,n)}let r=this.now;n.p.positionX&&(n.p.positionX.setTargetAtTime(e.x,r,.05),n.p.positionY.setTargetAtTime(e.y,r,.05),n.p.positionZ.setTargetAtTime(e.z,r,.05));let a=.6+Math.random()*.8;n.gain.gain.setTargetAtTime(i*a*1.6,r,.04),n.f1.frequency.setTargetAtTime(140+Math.random()*90,r,.05)}update(t,e){if(!this.enabled)return;this.listenerPos=e.listener;let i=this.now;if(this.chase.gain.setTargetAtTime(e.chase*.9,i,.6),this.high.gain.setTargetAtTime(e.chase>.6?(e.chase-.6)*2.2:0,i,.4),this.breath.g.gain.setTargetAtTime(e.breath*.05,i,.3),this.hiss.g.gain.setTargetAtTime(e.lament*.05,i,.3),this.ambBus.gain.setTargetAtTime(e.ambient??1,i,.5),e.chase>.3&&i>this.nextDrum){this.nextDrum=i+(e.chase>.7?.9:1.8);let n=this._dest(null,.5),r=this.ctx.createOscillator();r.frequency.setValueAtTime(90,i),r.frequency.exponentialRampToValueAtTime(40,i+.4);let a=this.ctx.createGain();this._env(a.gain,i,.004,.5*e.chase,.5),r.connect(a).connect(n),r.start(i),r.stop(i+.6)}this.crowT=(this.crowT??12)-t,this.crowT<0&&(this.crowT=Le(18,45),this.crow())}silenceGrind(t){if(!this.grinds)return;let e=this.grinds.get(t);e&&e.gain.gain.setTargetAtTime(0,this.now,.05)}};var it=(s=0,t=0,e=0)=>new C(s,t,e),ki=(s,t)=>{let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},ii=(s,t)=>Math.atan2(t.x-s.x,t.z-s.z),rt=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z),rc=it(0,1,0),jo=class{constructor(t,e,i){this.G=t,this.id=i,this.pos=it(e.x,0,e.z),this.model=Nu(t.M),this.model.position.copy(this.pos),this.model.rotation.y=e.rot,t.world.root.add(this.model),this.progress=0,this.ringers=new Set,this.done=!1,this.regress=!1,this.milestone=0,this.creakT=0,this.doneSwing=0,this.slots=[[0,1.3],[0,-1.3],[1.35,0],[-1.35,0]].map(([n,r])=>it(n,0,r).applyAxisAngle(rc,e.rot).add(this.pos))}slotBlocked(t){let e=this.G;return e.sentinels.some(i=>rt(i.pos,t)<1)?!0:!!(e.killer&&rt(e.killer.pos,t)<1)}freeSlot(t,e=null){let i=null,n=1e9;for(let r of this.slots){if(r===e||this.slotBlocked(r)||[...this.ringers].some(o=>rt(o.pos,r)<.6))continue;let a=rt(r,t);a<n&&(n=a,i=r)}return i}update(t){let e=this.G,i=this.ringers.size,n=this.model.userData,r=e.time;if(!this.done){if(i>0){let h=[0,1,1.65,2.1,2.45][Math.min(i,4)]/72*e.bellRateMult();if(i===1){let u=[...this.ringers][0];u.hasPerk("ropeburn")&&(h*=1.15),u.isPlayer||(h*=.92)}this.progress+=h*t,this.regress=!1,this.creakT-=t,this.creakT<0&&(this.creakT=1.3,e.audio.creak(this.pos.clone().setY(2),.35)),Math.random()<t*.4&&e.noise(this.pos,26,"bell")}else this.regress&&(this.progress=Math.max(0,this.progress-.0035*t),this.progress<=0&&(this.regress=!1));let l=Math.floor(this.progress*4);l>this.milestone&&l<4&&(this.milestone=l,e.audio.chime(this.pos.clone().setY(3),520+l*110,.3)),l<this.milestone&&(this.milestone=l),this.progress>=1&&this.complete()}this.done&&(this.doneSwing=Math.max(.04,this.doneSwing-t*.06));let a=this.done?this.doneSwing:(i>0?.13+this.progress*.08:0)+(this.regress?.02:0);n.swing.rotation.z=Math.sin(r*2.6)*a,n.clap.rotation.z=Math.sin(r*2.6-.7)*a*1.5,n.rope.position.y=-.05+(i>0?Math.sin(r*2.4)*.12:0);let o=.85+Math.sin(r*13+this.id)*.07+Math.sin(r*23.7+this.id*3)*.05+(Math.random()-.5)*.08;n.light.intensity=(this.done?7:1.4+this.progress*1.8)*o,n.light.distance=this.done?16:9,n.light.color.setHex(this.done?16767392:16752720);for(let l of n.candles)l.scale.set(.06*(this.done?1.7:1),(.12+Math.random()*.02)*(this.done?1.9:1),1);n.halo.material.opacity=(this.done?.55:.25)*o,this.done&&(n.holy.material.opacity=.22+Math.sin(r*1.5)*.05)}complete(){this.done=!0,this.progress=1,this.doneSwing=.7,this.ringers.has(this.G.player)&&this.G.addScore("objectives",300,"Bell rung");for(let t of[...this.ringers])t.cancelAction();this.ringers.clear(),this.G.audio.toll(this.pos.clone().setY(3),196*(.9+this.id*.04),.9,8),this.G.onBellRung(this)}},Qo=class{constructor(t,e,i){this.G=t,this.id=i,this.state="up",this.a=it(e.ax,0,e.az),this.n=it(e.nx,0,e.nz),this.w=e.w,this.center=it(e.x,0,e.z),this.model=Fu(t.M),this.model.position.copy(this.center).addScaledVector(this.a,-(e.w/2-.06)),this.model.rotation.y=Math.atan2(this.a.x,this.a.z),this.angle=-.1,this.target=-.1,this.model.userData.pivot.rotation.x=this.angle,t.world.root.add(this.model);let n=Math.abs(this.a.x)*e.w/2+Math.abs(this.n.x)*.6,r=Math.abs(this.a.z)*e.w/2+Math.abs(this.n.z)*.6;this.box={minX:e.x-n,maxX:e.x+n,minY:0,maxY:.9,minZ:e.z-r,maxZ:e.z+r,kind:"pallet",sight:!1}}side(t){return Math.sign((t.x-this.center.x)*this.n.x+(t.z-this.center.z)*this.n.z)||1}lateral(t){return Math.abs((t.x-this.center.x)*this.a.x+(t.z-this.center.z)*this.a.z)}normalDist(t){return Math.abs((t.x-this.center.x)*this.n.x+(t.z-this.center.z)*this.n.z)}drop(t){if(this.state!=="up")return;let e=this.G;this.state="down",this.target=1.13,e.world.dynBoxes.push(this.box),e.world.setPalletNav(this,!0),e.audio.palletDrop(this.center.clone().setY(.5)),e.noise(this.center,35,"pallet");let i=e.killer;i&&this.lateral(i.pos)<this.w/2+.7&&this.normalDist(i.pos)<1.3&&(i.stun(2.4,"pallet"),t?.isPlayer&&e.addScore("boldness",1e3,"Pallet stun"));for(let n of e.survivors)n!==t&&n.alive&&this.lateral(n.pos)<this.w/2&&this.normalDist(n.pos)<.7&&n.pos.addScaledVector(this.n,this.side(n.pos)*.8);t&&this.lateral(t.pos)<this.w/2+.3&&this.normalDist(t.pos)<.75&&t.pos.addScaledVector(this.n,this.side(t.pos)*(.8-this.normalDist(t.pos)))}break(){if(this.state!=="down")return;let t=this.G;this.state="broken";let e=t.world.dynBoxes.indexOf(this.box);e>=0&&t.world.dynBoxes.splice(e,1),t.world.setPalletNav(this,!1),t.audio.palletBreak(this.center.clone().setY(.5)),t.fx.splinters(this.center.clone().setY(.5)),t.world.root.remove(this.model)}update(t){this.angle+=(this.target-this.angle)*Math.min(1,t*16),this.model.userData.pivot.rotation.x=this.angle}},ta=class{constructor(t,e,i){this.G=t,this.id=i,this.pos=it(e.x,0,e.z),this.model=ku(t.M),this.model.position.copy(this.pos),this.model.rotation.y=e.rot,t.world.root.add(this.model),this.hang=this.model.userData.hangPoint.clone().applyAxisAngle(rc,e.rot).add(this.pos),this.occupant=null,this.tend=0}update(t){let e=this.model.userData,i=this.occupant,n=i&&i.hookPhase===2?1:0;this.tend+=(n-this.tend)*Math.min(1,t*.8),e.tendrils.visible=this.tend>.01,e.tendrils.scale.y=Math.max(.001,this.tend*(1+Math.sin(this.G.time*2)*.05)),e.tendrils.rotation.y+=t*.1}},ea=class{constructor(t,e,i){this.G=t,this.id=i,this.spot=e,this.pos=it(e.x,0,e.z),this.model=Bu(t.M),this.model.position.copy(this.pos),this.model.rotation.y=e.out>0?Math.PI:0,t.world.root.add(this.model),this.lever=it(3.4,0,1.2).applyAxisAngle(rc,this.model.rotation.y).add(this.pos),this.inward=it(0,0,-e.out),this.progress=0,this.open=!1,this.openers=new Set,this.doorA=0}update(t){let e=this.G,i=this.model.userData;!this.open&&e.gatesPowered&&this.openers.size>0&&(this.progress+=t/18,this.progress>=1&&this.doOpen());let n=this.open?3:Math.floor(this.progress*3.0001);i.lamps.forEach((r,a)=>{r.material=a<n?this.open?this.G.M.lanternLit:this.G.M.lanternRed:this.G.M.lanternGlass}),i.light.intensity=e.gatesPowered?this.open?4:1+this.progress*2:0,i.light.color.setHex(this.open?14215423:16728096),i.lever.rotation.x=-.6+(this.open?1.2:this.progress*1.2),this.open&&(this.doorA=Math.min(1.75,this.doorA+t*.9),i.doors[0].rotation.y=-this.doorA,i.doors[1].rotation.y=this.doorA,i.beyond.material.opacity=Math.min(.9,i.beyond.material.opacity+t*.3))}doOpen(){this.open=!0,this.progress=1;for(let t of[...this.openers])t.cancelAction();this.G.world.openGateNav(this.id),this.G.audio.ironGate(this.pos.clone().setY(1.5)),this.G.onGateOpened(this)}},ia=class{constructor(t,e){this.G=t,this.pos=it(e.x,0,e.z),this.model=Ou(t.M),this.model.position.copy(this.pos),t.world.root.add(this.model),t.audio.boom(this.pos,70,.4)}},Mx=0,na=class{constructor(t,e,i,n=[]){this.G=t,this.def=e,this.isPlayer=i,this.id=Mx++,this.name=e.name,this.perks=new Set(n),this.model=Du(e,t.M),t.scene.add(this.model),this.aura=Yo(this.model,t.M.auraAlly),this.aura.visible=!1,t.scene.add(this.aura),this.pos=it(),this.yaw=0,this.vel=it(),this.health="healthy",this.hookCount=0,this.hookPhase=0,this.hookTimer=0,this.post=null,this.bleed=240,this.healProg=0,this.healers=new Set,this.maxResolve=this.hasPerk("unblinking")?140:100,this.resolve=this.maxResolve,this.blinkT=0,this.blinkDur=0,this.watching=!1,this.watchedFor=0,this.action=null,this.vault=null,this.boost=0,this.immune=0,this.exhausted=0,this.crouch=!1,this.anim="idle",this.animT=Math.random()*10,this.stepT=0,this.scratchT=0,this.groanT=3,this.wiggle=0,this.speed=0,this.moveDir=it(),this.secondWakeUsed=!1,this.noBlink=0,this.escapeAttempts=3,this.ai={state:"bell",t:0,path:null,pathT:0,goal:null,stuckT:0,lastPos:it(),glanceT:2+Math.random()*3,aware:!1,bell:null,claim:null,fleeT:0}}hasPerk(t){return this.perks.has(t)}get alive(){return this.health!=="dead"&&this.health!=="escaped"}get standing(){return this.health==="healthy"||this.health==="injured"}get free(){return this.standing&&!this.vault}get blinking(){return this.blinkT>0}get eyeY(){return this.health==="downed"?.35:this.crouch?1:1.6}eye(){return it(this.pos.x,this.pos.y+this.eyeY,this.pos.z)}chest(){return it(this.pos.x,this.pos.y+(this.health==="downed"?.25:this.crouch?.6:1.15),this.pos.z)}forward(){return it(Math.sin(this.yaw),0,Math.cos(this.yaw))}place(t){this.pos.set(t.x,0,t.z)}cancelAction(){let t=this.action;t&&(t.type==="ring"&&t.bell.ringers.delete(this),t.type==="gate"&&t.gate.openers.delete(this),t.type==="heal"&&t.target&&t.target.healers.delete(this),t.type==="selfheal"&&this.healers.delete(this),this.action=null,this.isPlayer&&this.G.ui.skill.cancel())}startAction(t,e={}){this.cancelAction(),this.action={type:t,t:0,...e},t==="ring"&&e.bell.ringers.add(this),t==="gate"&&e.gate.openers.add(this),t==="heal"&&e.target.healers.add(this),t==="selfheal"&&this.healers.add(this)}forceBlink(t){!this.alive||this.noBlink>0||(this.blinkT<=0?(this.blinkDur=t,this.blinkT=t,this.isPlayer&&(this.G.audio.blink(),this.G.onPlayerBlink())):this.blinkT=Math.max(this.blinkT,t))}hit(){let t=this.G;return this.immune>0?(this.immune=0,this.boost=2,t.audio.hit(this.chest()),t.audio.scream(this.chest(),this.def.voice,.4,.6),"immune"):(this.cancelAction(),this.health==="healthy"?this.health="injured":this.health==="injured"&&(this.health="downed",this.bleed=240,this.healProg=0,this.crouch=!1),this.boost=this.health==="injured"?2:0,t.audio.hit(this.chest()),t.audio.scream(this.chest(),this.def.voice,.6,1),t.noise(this.pos,40,"scream"),t.fx.blood(this.chest()),t.onHit(this),this.health)}update(t){let e=this.G;if(this.animT+=t,!!this.alive){if(this.blinkT>0&&(this.blinkT-=t),this.boost=Math.max(0,this.boost-t),this.immune=Math.max(0,this.immune-t),this.exhausted=Math.max(0,this.exhausted-t),this.noBlink=Math.max(0,this.noBlink-t),this.watching)this.watchedFor+=t;else{let i=16*(this.hasPerk("tallow")?2:1);e.killer&&rt(e.killer.pos,this.pos)<16&&(i*=.85),this.resolve=Math.min(this.maxResolve,this.resolve+i*t),this.watchedFor=0}if(this.health==="downed"&&(this.bleed-=t*(this.healers.size?0:1),this.bleed<=0)){this.die("bled");return}if(!(this.health==="hooked"&&(this.updateHooked(t),!this.alive))){if(this.health==="injured"&&!this.hasPerk("hymn")&&(this.groanT-=t,this.groanT<0&&(this.groanT=4+Math.random()*5,e.audio.groan(this.chest(),this.def.voice),e.noise(this.pos,9,"groan"))),this.healers.size&&(this.health==="injured"||this.health==="downed")){let i=0;for(let n of this.healers){let a=n===this?1/32:this.health==="downed"?1/12:1/16;n.hasPerk("hymn")&&(a*=1.5),i+=a}if(this.healProg+=i*t,this.healProg>=1){this.healProg=0;let n=this.health;this.health=n==="downed"?"injured":"healthy";for(let r of[...this.healers])r.isPlayer&&r!==this&&e.addScore("altruism",800,n==="downed"?"Revived":"Healed"),r.cancelAction();this.healers.clear(),this.healClaim=null}}this.vault?this.updateVault(t):this.health==="carried"?this.updateCarried(t):this.isPlayer?e.playerControl(this,t):this.updateAI(t),this.action&&this.updateAction(t),this.speed>3.2&&(this.scratchT-=t,this.scratchT<0&&(this.scratchT=.35,e.scratches.push({x:this.pos.x,z:this.pos.z,t:e.time,s:this}))),this.speed>.5&&(this.standing||this.health==="downed")&&(this.stepT-=t*this.speed,this.stepT<0&&(this.stepT=1.25,e.audio.footstep(this.pos.clone().setY(.1),this.speed>3?.2:.1,this.crouch))),this.syncModel(t)}}}updateAction(t){let e=this.action,i=this.G;if(e.t+=t,e.type==="ring")(e.bell.done||e.bell.locked)&&this.cancelAction();else if(e.type==="heal"){let n=e.target;(!n.alive||rt(n.pos,this.pos)>2.2||n.health!=="injured"&&n.health!=="downed")&&this.cancelAction()}else if(e.type==="selfheal")this.health!=="injured"&&this.cancelAction();else if(e.type==="unhook"){let n=e.target;if(n.health!=="hooked"){this.cancelAction();return}e.t>=1.2&&(this.cancelAction(),n.unhook(this))}else if(e.type==="gate")e.gate.open&&this.cancelAction();else if(e.type==="shroud"){if(e.t>=2.2){let n=e.target;this.cancelAction(),n===i.killer?(i.killer.veil(),this.isPlayer&&i.addScore("boldness",2e3,"Veiled the Reliquary")):(n.setShroud(45),this.isPlayer&&i.addScore("boldness",400,"Shrouded a Sentinel"))}}else e.type==="drop"?e.t>=.25&&(this.action=null):e.type==="hatch"&&e.t>=.8&&(this.cancelAction(),this.escape("hatch"))}updateHooked(t){let e=this.G,i=(this.hookPhase===2&&this.isPlayer,1);if(this.hookTimer-=t*i,this.hookTimer<=0)if(this.hookPhase===1)this.hookPhase=2,this.hookTimer=50,e.toast(`${this.name} is struggling against the moor`,"warn"),e.audio.gurgle(this.post.hang,14,2);else{this.die("sacrificed");return}this.hookPhase===2&&Math.random()<t*.6&&e.audio.gurgle(this.post.pos.clone().setY(.2),2,.4);let n=this.hookPhase===2?.25+(1-this.hookTimer/50)*.55:(1-this.hookTimer/55)*.25;this.pos.set(this.post.hang.x,this.post.hang.y-2.15-n,this.post.hang.z),this.yaw=this.post.model.rotation.y+Math.PI/2,this.speed=0}updateCarried(t){let e=this.G.killer,i=it(Math.cos(e.yaw),0,-Math.sin(e.yaw));this.pos.copy(e.pos).addScaledVector(i,-.32).add(it(0,1.85,0)).addScaledVector(e.forward(),.05),this.yaw=e.yaw+Math.PI/2,this.speed=0,this.isPlayer||(this.wiggle+=t*.055),this.wiggle>=1&&e.dropCarried(!0)}updateVault(t){let e=this.vault;e.t+=t;let i=Math.min(1,e.t/e.dur);this.pos.lerpVectors(e.from,e.to,i),this.pos.y=Math.sin(i*Math.PI)*(e.kind==="window"?.75:.5),this.yaw=e.yaw,this.speed=0,i>=1&&(this.pos.y=0,this.vault=null,this.hasPerk("hare")&&this.exhausted<=0&&this.G.killer&&rt(this.G.killer.pos,this.pos)<12&&(this.boost=3,this.exhausted=40,this.hareBoost=!0))}startVault(t,e,i){let n=t==="window"?it(e.x,0,e.z):e.center,r=t==="window"?it(e.nx,0,e.nz):e.n,a=Math.sign((this.pos.x-n.x)*r.x+(this.pos.z-n.z)*r.z)||1,o=t==="window"?it(e.ax,0,e.az):e.a,l=ne((this.pos.x-n.x)*o.x+(this.pos.z-n.z)*o.z,-.2,.2),c=n.clone().addScaledVector(r,a*.75).addScaledVector(o,l),h=n.clone().addScaledVector(r,-a*(t==="window"?.8:.95)).addScaledVector(o,l);this.cancelAction(),this.vault={kind:t,from:this.pos.clone().lerp(c,.5),to:h,t:0,dur:i?.5:t==="window"?.95:.85,yaw:Math.atan2(-a*r.x,-a*r.z)},this.G.audio.vault(n.clone().setY(.8),i),i&&this.G.noise(n,26,"vault"),this.isPlayer&&this.G.killer&&this.G.killer.target===this&&rt(this.G.killer.pos,this.pos)<14&&this.G.addScore("boldness",250,"Chase vault")}hook(t){if(this.health="hooked",this.post=t,t.occupant=this,this.hookCount++,this.healProg=0,this.wiggle=0,this.escapeAttempts=3,this.hookCount>=3){this.die("sacrificed");return}this.hookPhase=this.hookCount===1?1:2,this.hookTimer=this.hookPhase===1?55:50,this.G.audio.chains(t.hang),this.G.audio.scream(t.hang,this.def.voice,.55,1.4),this.G.onSurvivorHooked(this)}unhook(t){let e=this.G,i=this.post;i.occupant=null,this.post=null,this.health="injured",this.hookPhase=0;let n=it(i.hang.x-i.pos.x,0,i.hang.z-i.pos.z).normalize();this.pos.set(i.hang.x,0,i.hang.z).addScaledVector(n,.7),e.world.collide(this.pos,.32),this.immune=10,this.boost=1.5,this.hasPerk("secondwake")&&!this.secondWakeUsed&&(this.secondWakeUsed=!0,this.noBlink=15,this.immune=15),e.audio.chains(i.hang,5),t&&t!==this?(e.toast(`${t.name} freed ${this.name}`,"good"),t.isPlayer&&e.addScore("altruism",1500,"Unbound a survivor")):e.toast(`${this.name} tore free of the post`,"good")}die(t){let e=this.G;this.cancelAction(),this.post&&(this.post.occupant=null);let i=this.post?this.post.pos.clone():this.pos.clone();this.health="dead",this.model.visible=!1,this.aura.visible=!1,e.audio.boom(i.setY(.5),45,.9),e.audio.gurgle(i,18,2.2),e.fx.sink(i),e.onSurvivorDied(this,t),this.post=null}escape(t){this.cancelAction(),this.health="escaped",this.model.visible=!1,this.aura.visible=!1,this.G.onEscape(this,t)}moveTo(t,e,i,n=!0,r=null){let a=this.G;if(t.lengthSq()>1e-6){t.normalize(),this.pos.addScaledVector(t,e*i),a.world.collide(this.pos,.32,a.agentCircles(this));let o=r??Math.atan2(t.x,t.z);n&&(this.yaw+=ki(this.yaw,o)*Math.min(1,i*10)),this.speed=e}else this.speed=0;this.pos.y=0}runSpeed(){let t=this.health==="downed"?.7:4;return this.boost>0&&this.standing&&(t*=(this.hareBoost,1.5)),this.boost<=0&&(this.hareBoost=!1),t}syncModel(t){let e=this.model;e.position.copy(this.pos),e.rotation.y=this.yaw;let i="idle",n={injured:this.health==="injured",speed:this.speed};if(this.health==="hooked")i="hooked",n.struggle=this.hookPhase===2;else if(this.health==="carried")i="carried",n.wiggle=!0;else if(this.health==="downed")i="crawl";else if(this.vault)i="vault";else if(this.action){let r=this.action.type;i=r==="ring"?"ring":r==="heal"||r==="selfheal"||r==="hatch"?"work":r==="drop"?"drop":"reach",n.phase=this.action.t/.25}else this.speed>3?i="run":this.speed>.3?i=this.crouch?"crouch":this.backpedal?"back":"walk":this.crouch&&(i="crouch",n.speed=0);i==="crouch"&&this.speed<.3&&(this.animT-=t),this.isPlayer&&this.lookPitch!==void 0&&(n.lookPitch=this.lookPitch,n.lookYaw=this.lookYaw),Uu(e,i,this.animT,t,n),this.health==="carried"&&(e.rotation.z=0),this.aura.visible&&(this.aura.position.copy(e.position),this.aura.rotation.copy(e.rotation),oc(e,this.aura))}knowsKiller(){let t=this.G.killer,e=rt(t.pos,this.pos);return!!(this.watching||t.target===this&&e<22||e<9&&t.moving)}aiPathTo(t,e,i,n={}){let r=this.G,a=this.ai;if(a.pathT-=e,!a.path||a.pathT<=0||!a.goal||rt(a.goal,t)>1.5){let o=r.world.findPath(this.pos.x,this.pos.z,t.x,t.z,"survivor",45e3);a.path=o||[],a.goal=t.clone?t.clone():it(t.x,0,t.z),a.pathT=1.2+Math.random()*.6,o?a.failT=0:(a.failT=(a.failT||0)+1,a.failT>2&&(a.failT=0,a.bell=null,a.slot=null,a.fleeGoal=null))}return this.followPath(e,i,n)}followPath(t,e,i={}){let n=this.ai,r=this.G,a=n.path;if(!a||!a.length)return this.speed=0,!0;let o=a[0];if(o.portal){let h=o.portal.type==="window"?r.world.windows[o.portal.id]:r.pallets[o.portal.id];if(!h||o.portal.type==="pallet"&&h.state!=="down")return a.shift(),!1;let u=o.portal.type==="window"?it(h.x,0,h.z):h.center,d=o.portal.type==="window"?it(h.nx,0,h.nz):h.n,f=(this.pos.x-u.x)*d.x+(this.pos.z-u.z)*d.z,g=o.portal.type==="window"?it(h.ax,0,h.az):h.a,x=o.portal.type==="window"?h.halfW:h.w/2,m=Math.abs((this.pos.x-u.x)*g.x+(this.pos.z-u.z)*g.z),p=u.clone().addScaledVector(d,Math.sign(f||1)*.75);return rt(p,this.pos)<.5||Math.abs(f)<.95&&m<x+.3?(a.shift(),this.startVault(o.portal.type,h,e>3.5),!1):(this.moveTo(it(p.x-this.pos.x,0,p.z-this.pos.z),e,t),!1)}if(rt(o,this.pos)<(o.final?.4:.45)){if(a.shift(),!a.length)return this.speed=0,!0;if(o=a[0],o.portal)return!1}let c=it(o.x-this.pos.x,0,o.z-this.pos.z);return this.moveTo(c,e,t,!i.faceYaw,i.faceYaw),n.stuckT+=t,n.stuckT>1.5&&(rt(n.lastPos,this.pos)<.4&&(n.path=null,n.pathT=0,this.pos.x+=(Math.random()-.5)*.4,this.pos.z+=(Math.random()-.5)*.4),n.lastPos.copy(this.pos),n.stuckT=0),!1}updateAI(t){let e=this.G,i=this.ai,n=e.killer;if(this.backpedal=!1,this.health==="hooked"){if(this.hookPhase===1&&this.escapeAttempts>0&&this.hookTimer<40&&Math.random()<t*.05&&(this.escapeAttempts--,Math.random()<.04)){this.unhook(this);return}return}if(this.health==="downed"){let u=e.survivors.filter(d=>d!==this&&d.standing).sort((d,f)=>rt(d.pos,this.pos)-rt(f.pos,this.pos))[0];if(this.healers.size){this.speed=0;return}if(n&&rt(n.pos,this.pos)<10){let d=it(this.pos.x-n.pos.x,0,this.pos.z-n.pos.z);this.moveTo(d,.7,t)}else u&&rt(u.pos,this.pos)>3?this.aiPathTo(u.pos,t,.7):this.speed=0;return}if(!this.standing)return;let r=rt(n.pos,this.pos),a=this.knowsKiller();i.t-=t,i.glanceT-=t,i.glanceT<0&&(i.glanceT=1.5+Math.random()*2,r<16&&e.world.lineOfSight(this.eye(),n.headPos())&&Math.random()<.3&&(i.noticed=e.time));let o=e.time-(i.noticed??-99)<4&&r<22;if((a||o)&&r<12&&!n.carrying){if((this.noBlink>0||this.resolve>(i.state==="watch"?8:80))&&r>1.6){this.setAI("watch"),this.cancelActionIfNot();let d=ii(this.pos,n.pos);this.yaw+=ki(this.yaw,d)*Math.min(1,t*8);let f=it(this.pos.x-n.pos.x,0,this.pos.z-n.pos.z).normalize(),g=it(-f.z,0,f.x).multiplyScalar(Math.sin(e.time*.7+this.id)*.6),x=f.add(g);r<9?(this.backpedal=!0,this.moveTo(x,1.6,t,!1)):this.speed=0;return}this.setAI("flee")}if(i.state==="flee")if(i.fleeT-=t,r>24&&i.fleeT<=0)this.setAI("bell");else{(!i.fleeGoal||i.fleeT<=0||rt(i.fleeGoal,this.pos)<2)&&(i.fleeGoal=this.pickFleeGoal(),i.fleeT=3,i.path=null);for(let u of e.pallets)if(u.state==="up"&&u.lateral(this.pos)<u.w/2+.2&&u.normalDist(this.pos)<1&&r<5&&u.side(n.pos)!==u.side(this.pos)){this.startAction("drop"),u.drop(this);break}this.cancelActionIfNot("drop"),this.aiPathTo(i.fleeGoal,t,this.runSpeed());return}if(this.action?.type==="drop")return;let l=e.survivors.find(u=>u.health==="hooked"&&(!u.rescuer||u.rescuer===this));if(l&&rt(n.pos,l.pos)>14&&(l.hookTimer<45||l.hookPhase===2)){l.rescuer=this,this.setAI("rescue");let u=it(l.post.hang.x,0,l.post.hang.z);rt(u,this.pos)<1.5?(this.action?.type!=="unhook"&&this.startAction("unhook",{target:l}),this.yaw=ii(this.pos,u),this.speed=0):(this.cancelAction(),this.aiPathTo(u,t,this.runSpeed()));return}if(l?.rescuer===this&&(l.rescuer=null),r>18){let u=e.survivors.filter(g=>g!==this&&(g.health==="downed"||g.health==="injured"&&!g.isPlayer&&this.health==="healthy")&&rt(g.pos,this.pos)<25).sort((g,x)=>(g.health==="downed"?-10:0)+rt(g.pos,this.pos)-((x.health==="downed"?-10:0)+rt(x.pos,this.pos)))[0],f=e.player.health==="injured"&&e.player.speed<.2&&!e.player.action&&rt(e.player.pos,this.pos)<6&&this.health==="healthy"?e.player:u;if(f&&(!f.healers.size||f.healers.has(this))&&(!f.healClaim||f.healClaim===this)){this.setAI("heal"),f.healClaim=this,rt(f.pos,this.pos)<1.4?(this.action?.type!=="heal"&&this.startAction("heal",{target:f}),this.yaw=ii(this.pos,f.pos),this.speed=0):(this.cancelAction(),this.aiPathTo(f.pos,t,2.6));return}if(this.health==="injured"&&r>26&&!e.gatesPowered){this.setAI("mend"),this.action?.type!=="selfheal"&&this.startAction("selfheal"),this.speed=0;return}}let c=this.healClaim&&this.healClaim.alive&&this.healClaim.ai.state==="heal"&&rt(this.healClaim.pos,this.pos)<26;if(this.healers.size&&!this.healers.has(this)||c){this.healers.size||this.cancelAction(),this.speed=0;return}if(e.gatesPowered){this.setAI("gate");let u=e.gates.slice().sort((x,m)=>rt(x.pos,this.pos)-rt(m.pos,this.pos)),d=u.find(x=>x.open);if(d){let x=d.pos.clone().addScaledVector(d.inward,-4);(this.aiPathTo(x,t,this.runSpeed())||rt(x,this.pos)<1.5)&&(this.speed=0);return}let f=u[0],g=f.lever.clone().addScaledVector(f.inward,.9);rt(g,this.pos)<1?(this.action?.type!=="gate"&&this.startAction("gate",{gate:f}),this.yaw=ii(this.pos,f.lever),this.speed=0):(this.cancelAction(),this.aiPathTo(g,t,this.runSpeed()));return}if(e.hatch&&e.survivors.filter(u=>u.alive).length===1){rt(e.hatch.pos,this.pos)<1.2?this.action||this.startAction("hatch"):this.aiPathTo(e.hatch.pos,t,this.runSpeed());return}if(this.setAI("bell"),!i.bell||i.bell.done){let u=n.pos,d=f=>rt(f.pos,this.pos)*.6-f.progress*20+f.ringers.size*6+(rt(f.pos,u)<14?40:0);i.bell=e.bells.filter(f=>!f.done).sort((f,g)=>d(f)-d(g))[0],i.slot=null}let h=i.bell;if(!h){this.speed=0;return}if((!i.slot||h.slotBlocked(i.slot)||[...h.ringers].some(u=>u!==this&&rt(u.pos,i.slot)<.6))&&(i.slot=h.freeSlot(this.pos)||h.slots[0],i.slotT=0),rt(i.slot,this.pos)<3&&rt(i.slot,this.pos)>.5&&(i.slotT=(i.slotT||0)+t,i.slotT>5)){i.slotT=0;let u=h.freeSlot(this.pos,i.slot);u?i.slot=u:i.bell=null,i.path=null;return}rt(i.slot,this.pos)<.5?(i.slotT=0,this.action?.type!=="ring"&&this.startAction("ring",{bell:h}),this.yaw+=ki(this.yaw,ii(this.pos,h.pos))*Math.min(1,t*8),this.speed=0,Math.random()<t*.012&&(h.progress=Math.max(0,h.progress-.08),e.audio.crack(h.pos.clone().setY(2.5)),e.noise(h.pos,80,"crack"))):(this.cancelAction(),this.aiPathTo(i.slot,t,r<30?2.26:this.runSpeed()))}cancelActionIfNot(t){this.action&&this.action.type!==t&&this.cancelAction()}setAI(t){if(this.ai.state!==t){this.ai.state=t,this.ai.path=null,t!=="bell"&&(this.ai.slot=null);for(let e of this.G.survivors)e.rescuer===this&&t!=="rescue"&&(e.rescuer=null),e.healClaim===this&&t!=="heal"&&(e.healClaim=null)}}pickFleeGoal(){let t=this.G,e=t.killer,i=null,n=-1e9;for(let r=0;r<10;r++){let a=Math.random()*Math.PI*2,o=8+Math.random()*10,l={x:this.pos.x+Math.cos(a)*o,z:this.pos.z+Math.sin(a)*o};if(Math.abs(l.x)>jt-3||Math.abs(l.z)>jt-3)continue;let c=t.world.cellIndex(l.x,l.z);if(c<0||t.world.grid[c]!==0)continue;let h=rt(l,e.pos)*1.5-rt(l,this.pos)*.3,u=it(e.pos.x-this.pos.x,0,e.pos.z-this.pos.z).normalize(),d=it(l.x-this.pos.x,0,l.z-this.pos.z).normalize();h-=Math.max(0,u.dot(d))*25;for(let f of t.pallets)f.state==="up"&&rt(f.center,l)<4&&(h+=6);for(let f of t.world.windows)rt(f,l)<4&&(h+=4);h>n&&(n=h,i=l)}return i?it(i.x,0,i.z):it(-e.pos.x,0,-e.pos.z)}};function oc(s,t){let e=[],i=[];s.traverse(n=>e.push(n)),t.traverse(n=>i.push(n));for(let n=0;n<e.length&&n<i.length;n++)i[n].position.copy(e[n].position),i[n].rotation.copy(e[n].rotation),i[n].visible=e[n].visible}var ks={chaseNear:["lunge","claw","reach"],chaseFar:["reach","stalk","lunge"],search:["stalk","tilt","beckon"],patrol:["tilt","beckon","stalk","weep","pray"]},bx=0,gr=class{constructor(t,e,i,n){this.G=t,this.id=bx++,this.pos=e.clone(),this.pos.y=0,this.yaw=i,this.pose=n,this.model=fr(t.M,{alive:!1}),this.cloth=sc(t.M),this.cloth.visible=!1,t.world.root.add(this.model),t.world.root.add(this.cloth),this.circle={x:0,z:0,r:.45},this.shroud=0,this.moveTo(this.pos,i,n)}moveTo(t,e,i){this.pos.set(t.x,0,t.z),this.yaw=e,this.pose=i,this.model.position.copy(this.pos),this.model.rotation.y=e,jn(this.model,i),this.cloth.position.copy(this.pos),this.circle.x=t.x,this.circle.z=t.z}setShroud(t){this.shroud=t,this.cloth.visible=!0,this.G.audio.vault(this.pos.clone().setY(1.5),!1)}update(t){this.shroud>0&&(this.shroud-=t,this.shroud<=0&&(this.cloth.visible=!1))}samplePoints(){return[it(this.pos.x,1.95,this.pos.z),it(this.pos.x,1.1,this.pos.z)]}},sa=class{constructor(t){this.G=t,this.model=fr(t.M,{alive:!0}),t.scene.add(this.model),this.aura=Yo(this.model,t.M.aura),this.aura.visible=!1,t.scene.add(this.aura),this.cloth=sc(t.M),this.cloth.visible=!1,t.scene.add(this.cloth),this.pos=it(),this.yaw=0,this.watchers=0,this.petrified=!1,this.frozenT=0,this.unwatchedT=0,this.lament=!1,this.state="patrol",this.action=null,this.target=null,this.lastSeen=null,this.lastSeenT=-99,this.path=null,this.pathT=0,this.goal=null,this.goalBell=null,this.thinkT=0,this.cooldown=0,this.stunT=0,this.veilT=0,this.carrying=null,this.transferCD=25,this.plantCD=20,this.moving=!1,this.speed=0,this.poseName="tilt",this.variant=0,this.heardT=-99,this.stuckT=0,this.lastPos=it(),this.circle={x:0,z:0,r:.45},this._pts=[it(),it(),it(),it(),it(),it()],jn(this.model,"tilt")}place(t){this.pos.set(t.x,0,t.z),this.sync(0)}forward(){return it(Math.sin(this.yaw),0,Math.cos(this.yaw))}headPos(){return it(this.pos.x,2.3,this.pos.z)}eye(){return it(this.pos.x,2.2,this.pos.z)}samplePoints(){let t=this.model.userData;return this.model.updateMatrixWorld(!0),t.head.getWorldPosition(this._pts[0]),t.relic.getWorldPosition(this._pts[1]),t.arms.l.hand.getWorldPosition(this._pts[2]),t.arms.r.hand.getWorldPosition(this._pts[3]),this._pts[4].set(this.pos.x,.9,this.pos.z),this._pts[5].set(this.pos.x,.25,this.pos.z),this._pts}stun(t,e){this.stunT=Math.max(this.stunT,t),this.action=null,this.path=null,this.carrying&&this.dropCarried(!1),this.G.audio.stoneShift(this.pos.clone().setY(1.5),.6),this.G.fx.dust(this.pos.clone().setY(1.8),30),e==="pallet"&&this.G.toast("The Reliquary is stunned","good")}veil(){this.veilT=5,this.cloth.visible=!0,this.stun(5,"veil"),this.G.toast("You veiled the Reliquary","good")}dropCarried(t){let e=this.carrying;e&&(this.carrying=null,e.health="injured",e.wiggle=0,e.pos.copy(this.pos).addScaledVector(this.forward(),.9),e.pos.y=0,this.G.world.collide(e.pos,.32),e.boost=2,e.immune=0,t&&(this.stunT=Math.max(this.stunT,3),this.G.toast(`${e.name} wriggled free`,"good"),e.isPlayer&&this.G.addScore("survival",1200,"Wiggled free")))}detect(t){if(!t.alive||t.health==="hooked"||t.health==="carried")return!1;let e=rt(t.pos,this.pos);return e>28||t.crouch&&e>9&&!(t.speed>3)||e>7&&Math.abs(ki(this.yaw,ii(this.pos,t.pos)))>1.35?!1:this.G.world.lineOfSight(this.eye(),t.chest())}update(t){let e=this.G;this.cooldown=Math.max(0,this.cooldown-t),this.releaseT=Math.max(0,(this.releaseT||0)-(this.watchers?0:t)),this.transferCD-=t,this.plantCD-=t,this.veilT>0&&(this.veilT-=t,this.veilT<=0&&(this.cloth.visible=!1));let i=this.petrified;if(this.petrified=this.watchers>0,this.petrified?(this.frozenT+=t*(1+(this.watchers-1)*.5),this.unwatchedT=0,!i&&rt(e.player.pos,this.pos)<14&&e.audio.settle(this.pos.clone().setY(1.2))):(this.unwatchedT+=t,this.unwatchedT>2.5&&(this.frozenT=0),i&&(this.variant=Math.floor(Math.random()*5),this.frozenT>2.5&&(this.releaseT=Math.min(1,.35+this.frozenT*.08)))),this.lament=this.frozenT>5,this.lament&&this.petrified&&Math.random()<t*6&&e.fx.dust(this.headPos().add(it(0,-.2,0)),2),this.moving=!1,this.speed=0,this.stunT>0){this.stunT-=t,this.sync(t);return}if(this.petrified){this.sync(t);return}this.thinkT-=t,this.thinkT<=0&&(this.thinkT=.25,this.think()),this.act(t),this.choosePose(),this.sync(t)}think(){let t=this.G;if(this.action)return;if(this.carrying){this.state="carry";return}let e=null,i=1e9;for(let r of t.survivors){if(!this.detect(r))continue;let o=rt(r.pos,this.pos)+(r.health==="downed"?-4:0)+(r===this.target?-5:0)+(r.health==="injured"?-1:0);o<i&&(i=o,e=r)}if(!e&&t.bellsRung>=4){for(let r of t.survivors)if(r.standing&&r.resolve<25&&rt(r.pos,this.pos)<40){e=r;break}}if(e){this.target!==e&&(this.path=null),this.target=e,this.lastSeen=e.pos.clone(),this.lastSeenT=t.time,this.state="chase";return}if(this.target&&t.time-this.lastSeenT<9&&this.target.alive){this.state="search";let r=null;for(let a of t.scratches)a.t>this.lastSeenT-1&&rt(a,this.pos)<8&&(!r||a.t>r.t)&&(r=a);r&&rt(r,this.pos)>1?this.goal=it(r.x,0,r.z):this.lastSeen&&rt(this.lastSeen,this.pos)>1.2?this.goal=this.lastSeen:this.goal=this.target.pos.clone().add(it((Math.random()-.5)*6,0,(Math.random()-.5)*6));return}this.target=null;let n=null;for(let r of t.noises)t.time-r.t<5&&rt(r.pos,this.pos)<r.r&&r.t>this.heardT&&(!n||r.t>n.t)&&(n=r);if(n){this.heardT=n.t,this.state="investigate",this.goal=n.pos.clone(),this.goalBell=null,this.path=null;return}this.state==="investigate"&&this.goal&&rt(this.goal,this.pos)>2||(this.state!=="patrol"||!this.goal)&&(this.state="patrol",this.pickPatrol())}pickPatrol(){let t=this.G,e=t.bells.filter(i=>!i.done);if(e.length&&Math.random()<.85){let i=r=>-r.progress*30+rt(r.pos,this.pos)*.4+Math.random()*18-r.ringers.size*25,n=e.length>1?e.filter(r=>r!==this.lastBell):e;this.goalBell=n.sort((r,a)=>i(r)-i(a))[0],this.lastBell=this.goalBell,this.goal=this.goalBell.pos.clone()}else{this.goalBell=null;let i=t.world.randomFreePoint(Math.random,5,45);this.goal=it(i.x,0,i.z)}this.path=null}act(t){let e=this.G;if(this.action)return this.doAction(t);let i=this.releaseT>0?8.2:0,n=Math.max(7.2,i),r=Math.max(5,i),a=1.4,o=this.cooldown>0?a:r;if(this.state==="carry"&&this.carrying){let c=this.nearestPost();if(!c){this.dropCarried(!1);return}let h=it(c.hang.x,0,c.hang.z);if(rt(h,this.pos)<1.4){this.yaw=ii(this.pos,h),this.action={type:"hook",t:0,dur:1,post:c};return}this.travel(h,3.9,t);return}if(this.state==="chase"&&this.target){let c=this.target,h=rt(c.pos,this.pos);if(!c.alive||c.health==="hooked"||c.health==="carried"){this.target=null,this.state="patrol",this.goal=null;return}if(c.health==="downed"){if(h<1.4){this.action={type:"pickup",t:0,dur:1.1,target:c};return}this.travel(c.pos,h<7?n:r,t);return}if(h<2.4&&this.cooldown<=0&&!c.vault){this.yaw=ii(this.pos,c.pos),this.action={type:"swing",t:0,dur:.28,target:c};return}if(h>26&&this.tryTransfer(c.pos))return;this.travel(c.pos,this.cooldown>0?a:h<6?n:r,t,h<8);return}if(!this.goal){this.pickPatrol();return}if(this.tryTransfer(this.goal))return;if(this.travel(this.goal,this.state==="patrol"?4:o,t)||rt(this.goal,this.pos)<1.6){let c=this.goalBell;if(c&&!c.done&&c.progress>.05&&!c.regress&&c.ringers.size===0&&rt(c.pos,this.pos)<3){this.yaw=ii(this.pos,c.pos),this.action={type:"kick",t:0,dur:1.6,bell:c};return}if(this.plantCD<=0&&e.sentinels.length<6&&!e.survivors.some(h=>h.alive&&rt(h.pos,this.pos)<14)){this.action={type:"plant",t:0,dur:1.5};return}this.goal=null,this.state="patrol"}}doAction(t){let e=this.G,i=this.action;if(i.t+=t,i.type==="swing"){if(i.t>=i.dur){let n=i.target;if(this.action=null,n.standing&&!n.vault&&rt(n.pos,this.pos)<3&&e.world.lineOfSight(this.eye(),n.chest())){let r=n.hit();this.cooldown=2,e.fx.dust(n.chest(),8),r==="downed"&&e.toast(`${n.name} is down`,"bad")}else this.cooldown=1.4,e.audio.vault(this.pos.clone().setY(1.5),!1)}}else if(i.type==="pickup"){let n=i.target;if(n.health!=="downed"||rt(n.pos,this.pos)>2){this.action=null;return}if(i.t>=i.dur){this.action=null,n.cancelAction();for(let r of[...n.healers])r.cancelAction();n.healers.clear(),n.health="carried",n.wiggle=0,n.vault=null,this.carrying=n,this.state="carry",this.path=null,e.audio.stoneShift(this.pos.clone().setY(1),.3)}}else if(i.type==="hook"){if(i.t>=i.dur){this.action=null;let n=this.carrying;this.carrying=null,n&&!i.post.occupant?n.hook(i.post):n&&(n.health="downed",n.pos.copy(this.pos)),this.target=null,this.state="patrol",this.goal=null}}else if(i.type==="break"){if(i.pallet.state!=="down"){this.action=null;return}i.t>=i.dur&&(this.action=null,i.pallet.break())}else if(i.type==="vault"){let n=Math.min(1,i.t/i.dur);this.pos.lerpVectors(i.from,i.to,n),this.pos.y=Math.sin(n*Math.PI)*.6,n>=1&&(this.pos.y=0,this.action=null)}else if(i.type==="kick")i.t>=i.dur&&(this.action=null,i.bell.regress=!0,i.bell.progress=Math.max(0,i.bell.progress-.04),e.audio.chime(i.bell.pos.clone().setY(2.5),140,.5),e.audio.settle(i.bell.pos.clone().setY(1)),this.goal=null,this.state="patrol");else if(i.type==="plant"&&i.t>=i.dur){this.action=null,this.plantCD=35+Math.random()*15;let n=this.pos.clone().addScaledVector(this.forward(),1.4),r=e.world.cellIndex(n.x,n.z),a=e.bells.some(o=>rt(o.pos,n)<2.8);if(r>=0&&e.world.grid[r]===0&&!a){let o=["pray","tilt","beckon","reach","weep"];e.sentinels.push(new gr(e,n,this.yaw+Math.PI+(Math.random()-.5),o[Math.floor(Math.random()*o.length)])),e.audio.stoneShift(n.clone().setY(1),.35)}this.goal=null,this.state="patrol"}}nearestPost(){let t=null,e=1e9;for(let i of this.G.posts){if(i.occupant)continue;let n=rt(i.pos,this.pos);n<e&&(e=n,t=i)}return t}tryTransfer(t){let e=this.G;if(this.transferCD>0||this.carrying||!t||rt(this.pos,t)<26)return!1;let i=null,n=14;for(let l of e.sentinels){if(l.shroud>0)continue;let c=rt(l.pos,t);c<n&&rt(l.pos,this.pos)>15&&!e.isWatched(l.samplePoints())&&(n=c,i=l)}if(!i)return!1;let r=this.pos.clone(),a=this.yaw,o=this.poseName;return this.pos.copy(i.pos),this.yaw=i.yaw,this.poseName=i.pose,jn(this.model,this.poseName),i.moveTo(r,a,o),e.audio.stoneShift(r.clone().setY(1.2),.5),e.audio.stoneShift(this.pos.clone().setY(1.2),.5),this.transferCD=30,this.path=null,!0}travel(t,e,i,n=!1){let r=this.G;if(n&&r.world.walkable(this.pos,t))return this.step(it(t.x-this.pos.x,0,t.z-this.pos.z),e,i,rt(t,this.pos));if(this.pathT-=i,(!this.path||this.pathT<=0||!this.pathGoal||rt(this.pathGoal,t)>1.2)&&(this.path=r.world.findPath(this.pos.x,this.pos.z,t.x,t.z,"killer",45e3),this.pathGoal=it(t.x,0,t.z),this.pathT=this.state==="chase"?.35:1.2,!this.path))return this.path=[],this.pathT=.6,this.state==="patrol"&&this.pickPatrol(),!0;let a=this.path;if(!a.length)return!0;let o=a[0];if(o.portal){let c=o.portal.type==="window",h=c?r.world.windows[o.portal.id]:r.pallets[o.portal.id];if(!h||!c&&h.state!=="down")return a.shift(),!1;let u=c?it(h.x,0,h.z):h.center,d=c?it(h.nx,0,h.nz):h.n,f=c?it(h.ax,0,h.az):h.a,g=(this.pos.x-u.x)*d.x+(this.pos.z-u.z)*d.z,x=Math.abs((this.pos.x-u.x)*f.x+(this.pos.z-u.z)*f.z),m=u.clone().addScaledVector(d,Math.sign(g||1)*.9);return rt(m,this.pos)<.5||Math.abs(g)<1.2&&x<(c?h.halfW:h.w/2)+.4?(a.shift(),this.yaw=Math.atan2(-Math.sign(g||1)*d.x,-Math.sign(g||1)*d.z),c?this.action={type:"vault",t:0,dur:1.5,from:this.pos.clone(),to:u.clone().addScaledVector(d,-Math.sign(g||1)*.9)}:(this.action={type:"break",t:0,dur:2.4,pallet:h},r.audio.settle(u.clone().setY(.8))),!1):this.step(it(m.x-this.pos.x,0,m.z-this.pos.z),e,i,9)}let l=rt(o,this.pos);return l<.5?(a.shift(),!a.length):(this.step(it(o.x-this.pos.x,0,o.z-this.pos.z),e,i,l),this.stuckT+=i,this.stuckT>1.5&&(rt(this.lastPos,this.pos)<.4&&(this.path=null,this.pos.x+=(Math.random()-.5)*.5,this.pos.z+=(Math.random()-.5)*.5),this.lastPos.copy(this.pos),this.stuckT=0),!1)}step(t,e,i,n=99){if(t.lengthSq()<1e-6)return!0;t.normalize();let r=Math.min(e*i,n);this.pos.addScaledVector(t,r);let a=this.G.killerCircles();return this.G.world.collide(this.pos,.42,a),this.yaw+=ki(this.yaw,Math.atan2(t.x,t.z))*Math.min(1,i*12),this.moving=!0,this.speed=e,r>=n-1e-4}choosePose(){let t=this.action,e;if(t)e={swing:"lunge",pickup:"stalk",hook:"carry",break:"claw",kick:"claw",vault:"stalk",plant:"pray"}[t.type];else if(this.carrying)e="carry";else if(this.state==="chase"&&this.target){let i=rt(this.target.pos,this.pos)<5?ks.chaseNear:ks.chaseFar;e=i[this.variant%i.length]}else this.state==="search"||this.state==="investigate"?e=ks.search[this.variant%ks.search.length]:e=ks.patrol[this.variant%ks.patrol.length];e!==this.poseName&&(this.poseName=e,jn(this.model,e))}sync(t){let e=this.G,i=this.model;i.position.copy(this.pos),i.rotation.y=this.yaw,this.circle.x=this.pos.x,this.circle.z=this.pos.z,this.cloth.position.copy(this.pos);let n=i.userData.relic.material,r=.6+Math.sin(e.time*(this.lament?9:2.2))*.25;n.color.setRGB(.55*r*(this.lament?1.8:1),.11*r,.02*r);let a=e.player.hasPerk("stonehearing")?1.7:1;e.audio.grind("killer",this.pos.clone().setY(.6),this.moving?Math.min(1,this.speed/5)*a:0),this.aura.visible&&(this.aura.position.copy(i.position),this.aura.rotation.copy(i.rotation),oc(i,this.aura))}};var ra=class{constructor(t,e,i,n,r=1){this.cap=i,this.n=0,this.pos=new Float32Array(i*3),this.vel=new Float32Array(i*3),this.col=new Float32Array(i*3),this.size=new Float32Array(i),this.alpha=new Float32Array(i),this.life=new Float32Array(i),this.max=new Float32Array(i),this.grav=new Float32Array(i),this.drag=new Float32Array(i);let a=new Ee;a.setAttribute("position",new _e(this.pos,3).setUsage(hr)),a.setAttribute("color",new _e(this.col,3).setUsage(hr)),a.setAttribute("size",new _e(this.size,1).setUsage(hr)),a.setAttribute("alpha",new _e(this.alpha,1).setUsage(hr)),this.geo=a;let o=new Te({transparent:!0,depthWrite:!1,blending:n,uniforms:{tex:{value:e},scale:{value:400*r},fogColor:{value:t.fog?t.fog.color:new Mt(2501427)},fogDensity:{value:t.fog?t.fog.density:.036}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; varying float vFog; uniform float scale; uniform float fogDensity;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = size * scale / max(0.1, -mv.z); float d = -mv.z; vFog = 1.0 - exp(-fogDensity*fogDensity*d*d); }`,fragmentShader:`uniform sampler2D tex; uniform vec3 fogColor; varying vec3 vC; varying float vA; varying float vFog;
        void main(){ vec4 t = texture2D(tex, gl_PointCoord); gl_FragColor = vec4(mix(vC, fogColor, vFog), t.a * vA); if (gl_FragColor.a < 0.003) discard; }`});this.points=new Eo(a,o),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,i,n,r,a=0,o=.5,l=1){let c=this.n<this.cap?this.n++:Math.floor(Math.random()*this.cap);this.pos.set([t.x,t.y,t.z],c*3),this.vel.set([e.x,e.y,e.z],c*3),this.col.set([i.r,i.g,i.b],c*3),this.size[c]=n,this.life[c]=r,this.max[c]=r,this.grav[c]=a,this.drag[c]=o,this.alpha[c]=l,this.baseA=this.baseA||new Float32Array(this.cap),this.baseA[c]=l}update(t){for(let e=0;e<this.n;e++){if(this.life[e]-=t,this.life[e]<=0){let a=--this.n;if(e!==a){for(let o of[this.pos,this.vel,this.col])o[e*3]=o[a*3],o[e*3+1]=o[a*3+1],o[e*3+2]=o[a*3+2];for(let o of[this.size,this.life,this.max,this.grav,this.drag,this.alpha,this.baseA])o[e]=o[a]}e--;continue}let i=e*3,n=Math.max(0,1-this.drag[e]*t);this.vel[i]*=n,this.vel[i+1]=this.vel[i+1]*n-this.grav[e]*t,this.vel[i+2]*=n,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t,this.pos[i+1]<.02&&this.grav[e]>0&&(this.pos[i+1]=.02,this.vel[i+1]*=-.2,this.vel[i]*=.5,this.vel[i+2]*=.5);let r=this.life[e]/this.max[e];this.alpha[e]=this.baseA[e]*Math.min(1,r*3)*Math.min(1,(1-r)*8+.2)}this.geo.setDrawRange(0,this.n);for(let e of["position","color","size","alpha"])this.geo.attributes[e].needsUpdate=!0}clear(){this.n=0,this.geo.setDrawRange(0,0)}},Bs=(s,t,e)=>({r:s,g:t,b:e}),oe=s=>(Math.random()-.5)*s,oa=class{constructor(t,e){this.soft=new ra(t,e.dust,1600,yn),this.glow=new ra(t,e.glow,300,Di,1),this.wispT=0,this.ashT=0}dust(t,e=10){for(let i=0;i<e;i++)this.soft.emit({x:t.x+oe(.5),y:t.y+oe(.4),z:t.z+oe(.5)},{x:oe(.6),y:-.1-Math.random()*.4,z:oe(.6)},Bs(.55,.52,.47),.12+Math.random()*.2,1.5+Math.random()*2,.05,.8,.7)}splinters(t){for(let e=0;e<40;e++)this.soft.emit({x:t.x+oe(1.2),y:t.y+oe(.4),z:t.z+oe(1.2)},{x:oe(5),y:1+Math.random()*3,z:oe(5)},Bs(.25,.17,.1),.05+Math.random()*.06,1.2+Math.random(),9,.4,1);this.dust(t,20)}blood(t){for(let e=0;e<24;e++)this.soft.emit({x:t.x+oe(.2),y:t.y+oe(.3),z:t.z+oe(.2)},{x:oe(3),y:Math.random()*2,z:oe(3)},Bs(.28,.02,.02),.04+Math.random()*.05,.8+Math.random()*.6,9,.6,1)}sink(t){for(let e=0;e<60;e++)this.soft.emit({x:t.x+oe(2),y:.2+Math.random()*2.5,z:t.z+oe(2)},{x:oe(.4),y:.6+Math.random(),z:oe(.4)},Bs(.03,.03,.03),.3+Math.random()*.4,2+Math.random()*2,-.1,.3,.8)}ambient(t,e,i){for(this.ashT-=t;this.ashT<0;)this.ashT+=.04,this.soft.emit({x:e.x+oe(30),y:.3+Math.random()*6,z:e.z+oe(30)},{x:.3+oe(.2),y:oe(.15),z:.15+oe(.2)},Bs(.6,.6,.62),.03+Math.random()*.03,6+Math.random()*4,0,0,.5);if(this.wispT-=t,this.wispT<0&&i){this.wispT=.35;let n=i[Math.floor(Math.random()*i.length)];n&&this.glow.emit({x:n.x+oe(n.r*2),y:.3+Math.random()*1.2,z:n.z+oe(n.r*2)},{x:oe(.3),y:.05+Math.random()*.1,z:oe(.3)},Bs(.35,.5,.75),.15+Math.random()*.1,4+Math.random()*3,0,.1,.7)}}update(t){this.soft.update(t),this.glow.update(t)}clear(){this.soft.clear(),this.glow.clear()}};var Ze=s=>document.getElementById(s),un=s=>`<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${s}</svg>`,lc=[{id:"unblinking",name:"Unblinking",desc:"Your Resolve meter is 40% larger.",icon:un('<path d="M4 16c4-6 8-8 12-8s8 2 12 8c-4 6-8 8-12 8s-8-2-12-8z"/><circle cx="16" cy="16" r="4" fill="#e8c88a"/>')},{id:"afterimage",name:"Afterimage",desc:"When you blink, the Reliquary's aura burns into your eyes for 4s. 30s cooldown.",icon:un('<path d="M6 17c3-4 6-6 10-6s7 2 10 6"/><path d="M16 4v3M6 7l2 2M26 7l-2 2M3 13h2M27 13h2"/><circle cx="16" cy="18" r="3" fill="#e8c88a"/>')},{id:"ropeburn",name:"Ropeburn",desc:"You ring bells 15% faster when you ring alone.",icon:un('<path d="M16 3v6"/><path d="M10 22c0-7 2-12 6-12s6 5 6 12z"/><path d="M8 24h16"/><circle cx="16" cy="27" r="2"/>')},{id:"hare",name:"Hare's Flight",desc:"After you vault with the Reliquary within 12m, you run 50% faster for 3s. Then you're Exhausted for 40s.",icon:un('<path d="M5 22l7-6-3-6 8 4 4-6 1 8 5 2-6 3-2 6-3-5-6 3z"/>')},{id:"kinship",name:"Kinship of the Drowned",desc:"While anyone is bound to a Weeping Post, you see the Reliquary's aura whenever you're within 24m of that post.",icon:un('<rect x="4" y="12" width="12" height="8" rx="4"/><rect x="16" y="12" width="12" height="8" rx="4"/>')},{id:"hymn",name:"Hymn in the Throat",desc:"You mend yourself and heal others 50% faster. Your wounds make no sound.",icon:un('<path d="M12 24V8l12-3v15"/><circle cx="9" cy="24" r="3"/><circle cx="21" cy="21" r="3"/>')},{id:"stonehearing",name:"Stone-Hearing",desc:"The grinding of moving stone is much louder to you.",icon:un('<path d="M20 26c-3 0-4-3-6-4-3-2-5-5-5-9a7 7 0 0 1 14 0c0 3-2 4-3 6"/><path d="M14 13a2 2 0 0 1 4 0c0 2-2 2-2 4"/>')},{id:"tallow",name:"Tallow Breath",desc:"Your Resolve recovers twice as fast when you look away.",icon:un('<rect x="12" y="15" width="8" height="13"/><path d="M16 4c3 4 3 6 0 9-3-3-3-5 0-9z" fill="#e8c88a"/>')},{id:"secondwake",name:"Second Wake",desc:"Once per match, after you're unbound: you can't be forced to Blink for 15s, and you survive one hit during that time.",icon:un('<path d="M4 22h24"/><path d="M8 22a8 8 0 0 1 16 0"/><path d="M16 6v4M8 9l2 3M24 9l-2 3"/>')}];function xr(s,t=46,e=""){let i="#"+s.jacket.toString(16).padStart(6,"0"),n="#"+s.skin.toString(16).padStart(6,"0"),r="#"+s.hair.toString(16).padStart(6,"0"),a=s.extra==="cap"?'<rect x="15" y="9" width="18" height="5" rx="2" fill="#3a3428"/><rect x="13" y="13" width="15" height="2" fill="#3a3428"/>':s.extra==="cassock"?'<rect x="20" y="31" width="8" height="2.5" fill="#eee"/>':s.extra==="oilskin"?'<path d="M10 34c2-6 7-8 14-8s12 2 14 8" fill="none" stroke="#8a6a1a" stroke-width="2"/>':'<rect x="15" y="13" width="18" height="3" fill="#8a1e1a"/>';return`<svg viewBox="0 0 48 48" width="${t}" height="${t}"><defs><clipPath id="cp${s.id}${t}"><circle cx="24" cy="24" r="23"/></clipPath></defs>
    <circle cx="24" cy="24" r="23" fill="#121214"/>
    <g clip-path="url(#cp${s.id}${t})">
      <path d="M4 48c1-10 9-15 20-15s19 5 20 15z" fill="${i}"/>
      <rect x="20" y="27" width="8" height="7" fill="${n}"/>
      <ellipse cx="24" cy="20" rx="8.5" ry="10" fill="${n}"/>
      <path d="M15.5 19c0-7 4-10 8.5-10s8.5 3 8.5 10c-2-4-5-5-8.5-5s-6.5 1-8.5 5z" fill="${r}"/>
      ${a}
      ${e==="dead"?'<path d="M10 10l28 28M38 10L10 38" stroke="#b3261e" stroke-width="3"/>':""}
    </g></svg>`}function Gu(s,t,e,i,n){let r=h=>[s+e*Math.sin(h*Math.PI/180),t-e*Math.cos(h*Math.PI/180)],[a,o]=r(i),[l,c]=r(n);return`M ${a} ${o} A ${e} ${e} 0 ${n-i>180?1:0} 1 ${l} ${c}`}var ac=class{constructor(t){this.audio=t,this.el=Ze("skill"),this.active=!1,this.cb=null,this.good=Ze("skGood"),this.great=Ze("skGreat"),this.needle=Ze("skNeedle")}start(t,{size:e=48,great:i=12,dur:n=1.1}={}){this.active=!0,this.cb=t,this.t=-.55,this.dur=n,this.zone=110+Math.random()*190,this.size=e,this.greatSize=i,this.good.setAttribute("d",Gu(75,75,56,this.zone+i,this.zone+e)),this.great.setAttribute("d",Gu(75,75,56,this.zone,this.zone+i)),this.audio.skillWarn()}update(t){if(this.active){if(this.t+=t,this.t<0){this.el.style.display="none";return}this.el.style.display="block",this.angle=this.t/this.dur*360,this.needle.setAttribute("transform",`rotate(${this.angle} 75 75)`),this.angle>this.zone+this.size+6&&this.finish("miss")}}press(){if(!this.active||this.t<0)return!1;let t=this.angle;return t>=this.zone&&t<=this.zone+this.greatSize?this.finish("great"):t>=this.zone&&t<=this.zone+this.size?this.finish("good"):this.finish("miss"),!0}finish(t){this.active=!1,this.el.style.display="none",t==="great"?this.audio.skillGreat():t==="good"&&this.audio.skillGood();let e=this.cb;this.cb=null,e?.(t)}cancel(){this.active=!1,this.cb=null,this.el.style.display="none"}},aa=class{constructor(t){this.audio=t,this.skill=new ac(t),this.toastsEl=Ze("toasts"),this.statusEl=Ze("status"),this.lastHud=0}show(t,e=!0){Ze(t).classList.toggle("on",e)}only(...t){for(let e of document.querySelectorAll(".screen"))e.classList.toggle("on",t.includes(e.id))}toast(t,e=""){let i=document.createElement("div");for(i.className="toast "+e,i.textContent=t,this.toastsEl.appendChild(i);this.toastsEl.children.length>4;)this.toastsEl.firstChild.remove();setTimeout(()=>{i.style.transition="opacity .6s",i.style.opacity="0",setTimeout(()=>i.remove(),650)},e==="big"?4500:3200)}clearToasts(){this.toastsEl.innerHTML=""}buildStatus(t){this.statusEl.innerHTML="",this.rows=t.map(e=>{let i=document.createElement("div");return i.className="srow",i.innerHTML=`<div class="pt">${xr(e.def)}<div class="ring"></div></div><div><div class="nm">${e.def.short}${e.isPlayer?" (you)":""}</div><div class="st"></div><div class="pips"><i></i><i></i></div><div class="hb" style="display:none"><i></i></div></div>`,this.statusEl.appendChild(i),{r:i,st:i.querySelector(".st"),pips:i.querySelectorAll(".pips i"),hb:i.querySelector(".hb"),hbi:i.querySelector(".hb i"),pt:i.querySelector(".pt"),last:""}})}buildPerkHud(t){let e=Ze("perkHud");e.innerHTML="",this.perkEls={};for(let i=0;i<4;i++){let n=lc.find(a=>a.id===t[i]),r=document.createElement("div");r.className="d",r.style.visibility=n?"visible":"hidden",n&&(r.innerHTML=n.icon+'<div class="cd" style="height:0"></div>',r.title=n.name,this.perkEls[n.id]=r),e.appendChild(r)}}updateHud(t){let e=performance.now(),i=t.player,n=i.resolve/i.maxResolve;Ze("resolveArc").setAttribute("stroke-dashoffset",String(176*(1-n))),Ze("resolveArc").setAttribute("stroke",n<.25?"#e0483c":n<.5?"#e8a24a":"#d9cfbd"),Ze("pupil").setAttribute("r",String(i.watching?6.5:4.5));let r=Ze("resolve");if(r.classList.toggle("full",n>.99&&!i.watching),r.classList.toggle("lament",t.killer.lament&&i.watching),e-this.lastHud<100)return;if(this.lastHud=e,Ze("bellCount").textContent=String(Math.max(0,t.bellsRequired-t.bellsRung)),Ze("bellIcon").classList.toggle("done",t.gatesPowered),t.survivors.forEach((o,l)=>{let c=this.rows[l],h=o.health;c.last!==h&&(c.r.className="srow "+h,c.last=h,h==="dead"&&(c.pt.innerHTML=xr(o.def,46,"dead")+'<div class="ring"></div>')),c.st.textContent={healthy:"",injured:"Wounded",downed:"Dying",carried:"Carried",hooked:o.hookPhase===2?"Struggling":"Bound",dead:"Taken",escaped:"Escaped"}[h]||"",c.pips.forEach((u,d)=>u.classList.toggle("on",o.hookCount>d)),c.hb.style.display=h==="hooked"||h==="downed"?"block":"none",h==="hooked"&&(c.hbi.style.width=100*o.hookTimer/(o.hookPhase===1?55:50)+"%"),h==="downed"&&(c.hbi.style.width=100*o.bleed/240+"%")}),this.perkEls)for(let[o,l]of Object.entries(this.perkEls)){let c=0,h=!1;o==="afterimage"&&(c=Math.max(0,t.afterCD)/30,h=t.auraT>0&&t.auraSrc==="afterimage"),o==="hare"&&(c=i.exhausted/40,h=i.hareBoost&&i.boost>0),o==="kinship"&&(h=t.auraT>0&&t.auraSrc==="kinship"),o==="secondwake"&&(h=i.noBlink>0,c=i.secondWakeUsed&&!h?1:0),l.querySelector(".cd").style.height=c*100+"%",l.classList.toggle("active",h)}let a=Ze("collapse");t.collapseT!==null?(a.style.display="block",a.querySelector("i").style.width=100*t.collapseT/120+"%"):a.style.display="none"}prompt(t,e=null,i=!1){Ze("promptText").innerHTML=t||"";let n=Ze("promptBar");e===null?n.style.display="none":(n.style.display="block",n.classList.toggle("heal",i),n.firstElementChild.style.width=Math.min(1,e)*100+"%")}};var Yt=s=>document.getElementById(s),ve={sens:1,vol:.8,quality:"high",invert:!1,showFps:!1};try{Object.assign(ve,JSON.parse(localStorage.getItem("hollowmoor.settings")||"{}"))}catch{}var Mr=()=>{try{localStorage.setItem("hollowmoor.settings",JSON.stringify(ve))}catch{}},Qn=Yt("view"),Ri=new nr({canvas:Qn,antialias:!1,powerPreference:"high-performance"}),Wu=()=>ve.quality==="high"?Math.min(devicePixelRatio,1.5):Math.min(devicePixelRatio,1);Ri.setPixelRatio(Wu());Ri.setSize(innerWidth,innerHeight);Ri.shadowMap.enabled=!0;Ri.shadowMap.type=Wl;Ri.toneMapping=cr;Ri.toneMappingExposure=2.3;Ri.outputColorSpace=Pe;var ni=new bo,Xu=4607580;ni.fog=new Mo(Xu,.03);ni.background=new Mt(Xu);var ae=new je(64,innerWidth/innerHeight,.05,900),qu=new Uo(8689336,2761240,2);ni.add(qu);var hi=new Fo(11846884,1.7);hi.castShadow=!0;hi.shadow.mapSize.set(ve.quality==="high"?2048:1024,ve.quality==="high"?2048:1024);Object.assign(hi.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160});hi.shadow.bias=-5e-4;hi.shadow.normalBias=.04;ni.add(hi,hi.target);var wx={uniforms:{tDiffuse:{value:null},uTime:{value:0},uBlink:{value:0},uLow:{value:0},uLament:{value:0},uHurt:{value:0},uFade:{value:1},uHit:{value:0},uAspect:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uBlink, uLow, uLament, uHurt, uFade, uHit, uAspect; varying vec2 vUv;
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
      float r = length(d * vec2(uAspect, 1.0));
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
    }`},Dn,ca,fi;function Yu(){let s=Wu();Ri.setPixelRatio(s);let t=new Xe(innerWidth*s,innerHeight*s,{type:vi,samples:ve.quality==="high"?4:0});Dn=new Vo(Ri,t),Dn.addPass(new Wo(ni,ae)),ca=new Ns(new j(innerWidth,innerHeight),.55,.6,.82),ca.enabled=ve.quality==="high",Dn.addPass(ca),fi=new Us(wx),Dn.addPass(fi),Dn.addPass(new Xo),Dn.setSize(innerWidth,innerHeight),fi.uniforms.uAspect.value=innerWidth/innerHeight}Yu();addEventListener("resize",()=>{ae.aspect=innerWidth/innerHeight,ae.updateProjectionMatrix(),Ri.setSize(innerWidth,innerHeight),Dn.setSize(innerWidth,innerHeight),fi.uniforms.uAspect.value=innerWidth/innerHeight});var Ae=new Set,dn=new Set,hc=0,uc=0,yr=!1,Vi=!1;addEventListener("keydown",s=>{Zt?.state==="playing"&&["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","KeyS","KeyW"].includes(s.code)&&s.preventDefault(),Ae.has(s.code)||dn.add(s.code),Ae.add(s.code),s.code==="Escape"&&Zt&&(Zt.state==="playing"&&(Vi||!document.pointerLockElement)?Zt.pause():Zt.state==="paused"&&Vi&&Zt.resume())});addEventListener("keyup",s=>Ae.delete(s.code));addEventListener("blur",()=>{Ae.clear(),yr=!1});addEventListener("mousemove",s=>{!Zt||Zt.state!=="playing"||(document.pointerLockElement===Qn||Vi)&&(hc+=s.movementX||0,uc+=s.movementY||0)});Qn.addEventListener("mousedown",s=>{s.button===0&&(yr=!0),Zt?.state==="playing"&&!document.pointerLockElement&&!Vi&&br()});addEventListener("mouseup",s=>{s.button===0&&(yr=!1)});Qn.addEventListener("contextmenu",s=>s.preventDefault());function br(){try{let s=Qn.requestPointerLock?.();s&&s.catch&&s.catch(()=>{Vi=!0}),Qn.requestPointerLock||(Vi=!0)}catch{Vi=!0}}document.addEventListener("pointerlockchange",()=>{Zt&&(document.pointerLockElement===Qn?(Zt.state==="paused"&&Zt.resume(!0),le.show("clickPlay",!1)):Zt.state==="playing"&&!Vi&&Zt.pause())});document.addEventListener("pointerlockerror",()=>{Vi=!0});var ye=new Ko,le=new aa(ye),Zt=null,vr=new C,dc=class{constructor(t,e){this.T=t,this.M=e,this.audio=ye,this.ui=le,this.scene=ni,this.camera=ae,this.fx=new oa(ni,t),this.state="title",this.time=0,this.camYaw=0,this.camPitch=-.15,this.camPos=it(),this.survivors=[],this.bells=[],this.pallets=[],this.posts=[],this.gates=[],this.sentinels=[],this.noises=[],this.scratches=[],this.worldLights=[],this.titleT=0}buildWorld(t){this.world&&this.disposeMatch(),this.world=new Jo(ni,this.M,this.T,t,ve.quality),this.bells=this.world.bellSpots.map((i,n)=>new jo(this,i,n)),this.pallets=this.world.palletSpots.map((i,n)=>new Qo(this,i,n)),this.posts=this.world.postSpots.map((i,n)=>new ta(this,i,n)),this.gates=this.world.gateSpots.map((i,n)=>new ea(this,i,n));for(let i of this.world.altarCandles){let n=new Ui(this.M.flame);n.scale.set(.06,.12,1),n.position.copy(i),this.world.root.add(n);let r=new ue(new qt(.03,.035,.2,8),this.M.wax);r.position.copy(i).add(it(0,-.12,0)),this.world.root.add(r)}let e=new rn(16754784,2.2,10,1.6);e.position.set(9,1.8,0),this.world.root.add(e),this.flickers=[e],(this.world.lanterns||[]).slice(0,ve.quality==="high"?3:1).forEach(i=>{let n=new rn(16756848,1.8,8,1.6);n.position.copy(i),this.world.root.add(n),this.flickers.push(n);let r=new ue(new ee(.14,.2,.14),this.M.lanternLit);r.position.copy(i),this.world.root.add(r);let a=new Ui(this.M.glow);a.scale.set(1.6,1.6,1),a.position.copy(i),this.world.root.add(a)}),hi.position.copy(this.world.moonDir).multiplyScalar(60)}disposeMatch(){for(let t of this.survivors)ni.remove(t.model),ni.remove(t.aura);this.killer&&(ni.remove(this.killer.model),ni.remove(this.killer.aura),ni.remove(this.killer.cloth),ye.silenceGrind("killer")),this.world&&(this.world.dispose(),this.world.sky&&ni.remove(this.world.sky)),this.survivors=[],this.killer=null,this.sentinels=[],this.hatch=null,this.fx.clear()}setupTitle(){this.state="title",this.world||this.buildWorld(7),this.titleStatue||(this.titleStatue=fr(this.M,{alive:!0}),jn(this.titleStatue,"weep"));let t=this.world,e=it(-3.5,2.6,-8.2);this.titleCam={a:-1.75,r:22};t:for(let r of[22,19,25,16,28])for(let a=0;a<14;a++){let o=-1.75+(a%2?1:-1)*Math.ceil(a/2)*.12,l=it(-4+Math.cos(o)*r,2.4,Math.sin(o)*r),c=t.raycast(l,e)>.97;for(let d of[-.22,.22])c=c&&t.raycast(it(-4+Math.cos(o+d)*r,2.4,Math.sin(o+d)*r),e)>.9;if(!c||t.boxes.some(d=>l.x>d.minX-4&&l.x<d.maxX+4&&l.z>d.minZ-4&&l.z<d.maxZ+4))continue;let h=l.clone().lerp(e,.42);h.y=0;let u=t.cellIndex(h.x,h.z);if(!(u<0||t.grid[u]!==0)){this.titleCam={a:o,r,statue:h};break t}}let i=this.titleCam.statue||it(-6.2,0,-12.5),n=it(-4+Math.cos(this.titleCam.a)*this.titleCam.r,0,Math.sin(this.titleCam.a)*this.titleCam.r);this.titleStatue.position.copy(i),this.titleStatue.rotation.y=Math.atan2(n.x-i.x,n.z-i.z)+.4,this.world.root.add(this.titleStatue),this.titleStart=performance.now(),le.only("title")}async startMatch(t,e){le.only(),fi.uniforms.uFade.value=1,Yt("loadText").textContent="The moor shifts beneath you\u2026",le.show("loading"),Yt("loadBar").style.width="100%",await new Promise(a=>setTimeout(a,30)),this.titleStatue&&this.titleStatue.parent?.remove(this.titleStatue),this.buildWorld(Math.floor(Math.random()*1e9));let i=this.world,n=[t,...Zo.map((a,o)=>o).filter(a=>a!==t)];this.survivors=n.map((a,o)=>new na(this,Zo[a],o===0,o===0?e:[])),this.player=this.survivors[0],this.survivors.forEach((a,o)=>{let l=o/4*Math.PI*2,c=i.randomFreePoint(Math.random,0,2.5,i.survivorSpawn.x+Math.cos(l)*2,i.survivorSpawn.z+Math.sin(l)*2);a.place(c),a.yaw=ii(a.pos,it(0,0,0))}),this.killer=new sa(this),this.killer.place(i.killerSpawn),this.killer.yaw=ii(this.killer.pos,it(0,0,0));let r=this.bells.slice().sort(()=>Math.random()-.5).slice(0,2);for(let a of r){let o=i.randomFreePoint(Math.random,3,6,a.pos.x,a.pos.z);this.sentinels.push(new gr(this,it(o.x,0,o.z),Math.random()*6.28,["pray","tilt","beckon"][Math.floor(Math.random()*3)]))}this.bellsRung=0,this.bellsRequired=5,this.gatesPowered=!1,this.collapseT=null,this.hookEvents=0,this.noises=[],this.scratches=[],this.time=0,this.endT=null,this.auraT=0,this.afterCD=0,this.auraSrc="",this.score={objectives:0,survival:0,altruism:0,boldness:0},this.scoreLog=[],this.stareScore=0,this.skillT=3,this.hitShake=0,this.lastWiggleKey=null,this.escapeCD=0,this.chase=0,this.camYaw=this.player.yaw,this.camPitch=-.12,this.camPos.copy(this.player.pos).add(it(0,2,0)),le.buildStatus(this.survivors),le.buildPerkHud(e),le.clearToasts(),Yt("fps").style.display=ve.showFps?"block":"none",le.show("loading",!1),le.only("hud"),this.state="playing",this.fadeIn=0,this.matchStart=performance.now(),ye.toll(null,130,.5,9),setTimeout(()=>this.toast("Ring five of the seven Mourning Bells","big"),900),setTimeout(()=>this.toast("It cannot move while you watch it","warn"),4200)}pause(){this.state==="playing"&&(this.state="paused",le.only("hud","pause"),Ae.clear(),yr=!1)}resume(t=!1){this.state==="paused"&&(this.state="playing",le.only("hud"),!t&&!Vi&&br())}abandon(){this.state="title",this.disposeMatch(),this.world=null,document.exitPointerLock?.(),this.setupTitle()}toast(t,e){le.toast(t,e)}noise(t,e,i){this.noises.push({pos:t.clone(),r:e,type:i,t:this.time}),this.noises.length>40&&this.noises.shift()}addScore(t,e,i){this.score&&(this.score[t]+=e,i&&this.scoreLog.push(`${i} +${e}`))}bellRateMult(){return Math.max(.7,1-.05*this.hookEvents)}isWatched(t){return this.survivors.some(e=>this.canSee(e,t))}agentCircles(t){let e=this._ac||(this._ac=[]);e.length=0,this.killer&&!this.killer.action&&e.push(this.killer.circle);for(let i of this.sentinels)e.push(i.circle);return e}killerCircles(){let t=this._kc||(this._kc=[]);t.length=0;for(let e of this.sentinels)t.push(e.circle);return t}onBellRung(t){this.bellsRung++;let e=Math.max(0,this.bellsRequired-this.bellsRung);if(this.toast(e>0?`A Mourning Bell tolls \u2014 ${e} remain`:"The final bell tolls","good"),setTimeout(()=>{for(let i of this.survivors)i.forceBlink(1)},1200),e===0&&!this.gatesPowered){this.gatesPowered=!0,setTimeout(()=>{this.toast("The Lychgates are unsealed","big"),ye.toll(null,98,.9,10),ye.toll(null,147,.6,9),ye.toll(null,196,.5,8)},1800);for(let i of this.bells)if(!i.done){i.locked=!0;for(let n of[...i.ringers])n.cancelAction()}}}onSurvivorHooked(t){this.hookEvents++,this.toast(`${t.name} is bound to a Weeping Post`,"bad")}onSurvivorDied(t,e){this.toast(`${t.name} ${e==="bled"?"bled out in the peat":"was taken by the moor"}`,"bad"),t.isPlayer&&(this.endT=3,this.endReason=e),this.checkAllDone()}onEscape(t,e){this.toast(`${t.name} escaped${e==="hatch"?" through the Drowned Well":""}`,"good"),t.isPlayer&&(this.addScore("survival",e==="hatch"?4e3:5e3,"Escaped"),this.endT=2.5,this.endReason=e,ye.escapeChord()),this.checkAllDone()}checkAllDone(){this.survivors.every(t=>!t.alive)&&this.endT===null&&(this.endT=2.5)}onHit(t){t.isPlayer&&(this.hitShake=1)}onGateOpened(){this.toast("A Lychgate swings open","good"),this.collapseT===null&&(this.collapseT=120,setTimeout(()=>this.toast("The moor is rising \u2014 two minutes","warn"),1500))}onPlayerBlink(){this.player.hasPerk("afterimage")&&this.afterCD<=0&&(this.auraT=4,this.auraSrc="afterimage",this.afterCD=30)}canSee(t,e){if(!t.alive||t.blinking||t.health==="hooked"||t.health==="carried")return!1;if(t.isPlayer){for(let n of e)if(vr.copy(n).project(ae),!(vr.z>1||vr.z<-1||Math.abs(vr.x)>1||Math.abs(vr.y)>1)&&!(ae.position.distanceTo(n)>46)&&this.world.raycast(ae.position,n)>=.995)return!0;return!1}if(t.action&&t.action.type!=="drop")return!1;let i=t.eye();for(let n=0;n<Math.min(3,e.length);n++){let r=e[n];if(!(i.distanceTo(r)>30)&&!(Math.abs(ki(t.yaw,ii(t.pos,r)))>.95)&&this.world.raycast(i,r)>=.995)return!0}return!1}computeWatch(t){let e=this.killer,i=e.samplePoints(),n=0;for(let r of this.survivors){if(r.watching=this.canSee(r,i),!r.watching)continue;n++;let a=rt(r.pos,e.pos),o=12*ne(1.6-a/22,.5,1.6)*(e.lament?2.5:1);r.resolve-=o*t,r.resolve<=0&&(r.noBlink>0?r.resolve=.01:(r.resolve=28,r.forceBlink(.45))),r.isPlayer&&this.addScore("boldness",20*t)}e.watchers=n}interactions(t,e){let i={space:null,hold:null},n=(h,u)=>rt(h,t.pos)<u,r=(h,u=.25)=>{let d=it(h.x-t.pos.x,0,h.z-t.pos.z),f=d.length();return f<.7||d.divideScalar(f).dot(e)>u},a=Ae.has("ShiftLeft")||Ae.has("ShiftRight"),o=1e9;for(let h of this.world.windows){let u=(t.pos.x-h.x)*h.nx+(t.pos.z-h.z)*h.nz,d=Math.abs((t.pos.x-h.x)*h.ax+(t.pos.z-h.z)*h.az);Math.abs(u)<1.2&&d<h.halfW+.2&&r(h,.2)&&Math.abs(u)<o&&(o=Math.abs(u),i.space={text:"Vault",fn:()=>t.startVault("window",h,a&&t.speed>3)})}for(let h of this.pallets){if(h.state==="broken")continue;let u=h.normalDist(t.pos),d=h.lateral(t.pos);h.state==="up"&&d<h.w/2+.45&&u<1.15&&u<o&&(o=u,i.space={text:"Drop pallet",fn:()=>{t.startAction("drop"),h.drop(t)}}),h.state==="down"&&d<h.w/2+.2&&u<1.35&&u>.55&&r(h.center,.3)&&u<o&&(o=u,i.space={text:"Vault pallet",fn:()=>t.startVault("pallet",h,a&&t.speed>3)})}o=1e9;let l=(h,u,d)=>{h<o&&(o=h,i.hold={text:u,fn:d})};for(let h of this.bells)!h.done&&!h.locked&&n(h.pos,1.95)&&r(h.pos,0)&&l(rt(h.pos,t.pos),"Ring the bell",()=>t.startAction("ring",{bell:h}));for(let h of this.survivors)h!==t&&(h.health==="hooked"&&n(h.post.hang,1.7)&&l(.1,`Unbind ${h.def.short}`,()=>t.startAction("unhook",{target:h})),(h.health==="injured"||h.health==="downed")&&n(h.pos,1.5)&&l(rt(h.pos,t.pos),`${h.health==="downed"?"Revive":"Heal"} ${h.def.short}`,()=>t.startAction("heal",{target:h})));if(this.gatesPowered)for(let h of this.gates)!h.open&&n(h.lever,1.7)&&l(.2,"Open the Lychgate",()=>t.startAction("gate",{gate:h}));for(let h of this.sentinels)h.shroud<=0&&n(h.pos,1.75)&&r(h.pos,.3)&&l(rt(h.pos,t.pos),"Shroud the statue",()=>t.startAction("shroud",{target:h}));let c=this.killer;return c.petrified&&c.veilT<=0&&c.stunT<=0&&n(c.pos,1.75)&&r(c.pos,.3)&&l(rt(c.pos,t.pos),"Shroud the statue",()=>t.startAction("shroud",{target:c})),this.hatch&&n(this.hatch.pos,1.6)&&l(0,"Descend into the Drowned Well",()=>t.startAction("hatch")),i}playerControl(t,e){let i=it(Math.sin(this.camYaw),0,Math.cos(this.camYaw)),n=it(-Math.cos(this.camYaw),0,Math.sin(this.camYaw)),r=0,a=0;(Ae.has("KeyW")||Ae.has("ArrowUp"))&&(a+=1),(Ae.has("KeyS")||Ae.has("ArrowDown"))&&(a-=1),Ae.has("KeyD")&&(r+=1),Ae.has("KeyA")&&(r-=1);let o=i.clone().multiplyScalar(a).addScaledVector(n,r),l=Ae.has("KeyE")||yr;if(t.lookPitch=ne(-this.camPitch,-.6,.6),t.lookYaw=ne(ki(t.yaw,this.camYaw),-1.1,1.1),t.backpedal=!1,this.promptText="",this.promptProg=null,this.promptHeal=!1,t.health==="hooked")return this.hookedControl(t,e);if(t.health==="downed"){t.crouch=!1,o.lengthSq()>0?t.moveTo(o,.7,e):t.speed=0,this.promptText=t.healers.size?"Someone is helping you up\u2026":"You are dying. Crawl to safety.",this.promptProg=t.healers.size?t.healProg:null,this.promptHeal=!0;return}if(!t.standing)return;if(t.crouch=Ae.has("KeyC")||Ae.has("ControlLeft")||Ae.has("ControlRight"),t.action){let u=t.action;if(!{ring:l,heal:l,unhook:l,gate:l,shroud:l,hatch:!0,selfheal:Ae.has("KeyR"),drop:!0}[u.type]||o.lengthSq()>0&&u.type!=="drop"&&u.type!=="hatch")t.cancelAction();else{if(t.speed=0,u.type==="ring"&&(t.yaw+=ki(t.yaw,ii(t.pos,u.bell.pos))*Math.min(1,e*8),this.addScore("objectives",1e3/80*e)),u.type==="heal"||u.type==="unhook"||u.type==="shroud"||u.type==="gate"){let f=u.type==="gate"?u.gate.lever:u.target.pos;t.yaw+=ki(t.yaw,ii(t.pos,f))*Math.min(1,e*8)}this.actionPrompt(t,u),this.maybeSkillCheck(t,u,e);return}}let c=this.interactions(t,i);if(dn.has("Space")&&c.space){c.space.fn();return}if(l&&c.hold&&!this.holdLatch){c.hold.fn();return}if(l||(this.holdLatch=!1),Ae.has("KeyR")&&t.health==="injured"){t.startAction("selfheal");return}dn.has("KeyB")&&!t.blinking&&(t.forceBlink(.3),t.resolve=Math.min(t.maxResolve,t.resolve+30));let h=[];if(c.space&&h.push(`<kbd>Space</kbd> ${c.space.text}`),c.hold&&h.push(`<kbd>E</kbd> ${c.hold.text}`),t.health==="injured"&&!c.hold&&h.push("<kbd>R</kbd> Mend wounds"),this.promptText=h.join("&nbsp;&nbsp;&nbsp;"),o.lengthSq()>0){o.normalize();let u=o.dot(i)<-.35,d=Ae.has("ShiftLeft")||Ae.has("ShiftRight"),f;t.crouch?f=1.13:u?(f=1.6,t.backpedal=!0):d||t.boost>0?f=t.runSpeed():f=2.26,t.moveTo(o,f,e,!0,u?this.camYaw:null)}else t.speed=0}actionPrompt(t,e){let i={ring:"Ringing",heal:e.target?.health==="downed"?"Reviving":"Healing",selfheal:"Mending",unhook:"Unbinding",gate:"Opening",shroud:"Shrouding",hatch:"Descending",drop:""},n=null,r=!1;e.type==="ring"?n=e.bell.progress:e.type==="heal"?(n=e.target.healProg,r=!0):e.type==="selfheal"?(n=t.healProg,r=!0):e.type==="unhook"?n=e.t/1.2:e.type==="gate"?n=e.gate.progress:e.type==="shroud"&&(n=e.t/2.2),this.promptText=i[e.type]||"",this.promptProg=n,this.promptHeal=r}maybeSkillCheck(t,e,i){!["ring","heal","selfheal"].includes(e.type)||le.skill.active||(this.skillT-=i,!(this.skillT>0)&&(this.skillT=2.5+Math.random()*4.5,!(Math.random()>.6)&&le.skill.start(n=>{let r=t.action;if(n==="great")r?.type==="ring"&&(r.bell.progress=Math.min(.999,r.bell.progress+.012)),this.addScore("objectives",150,"Great toll check");else if(n==="good")this.addScore("objectives",50);else{if(r?.type==="ring")r.bell.progress=Math.max(0,r.bell.progress-.1),ye.crack(r.bell.pos.clone().setY(2.5)),this.noise(r.bell.pos,80,"crack"),this.toast("The bell cracks \u2014 the Reliquary heard that","bad");else if(r){let a=r.type==="heal"?r.target:t;a.healProg=Math.max(0,a.healProg-.1),ye.groan(t.chest(),t.def.voice,.3),this.noise(t.pos,12,"groan")}t.cancelAction(),this.holdLatch=!0}})))}hookedControl(t,e){t.speed=0,this.escapeCD-=e,t.hookPhase===1?(this.promptText=t.escapeAttempts>0?`Bound. Wait for help, or <kbd>Space</kbd> try to tear free (${t.escapeAttempts} left)`:"Bound. Wait for help.",this.promptProg=t.hookTimer/55,dn.has("Space")&&t.escapeAttempts>0&&this.escapeCD<=0&&(t.escapeAttempts--,this.escapeCD=1.2,Math.random()<.06?(t.unhook(t),this.addScore("survival",1500,"Tore free")):(t.hookTimer=Math.max(1,t.hookTimer-8),ye.chains(t.post.hang,4),this.toast("The chains hold","bad")))):(this.promptText="Struggle! Hit the toll checks or the moor takes you",this.promptProg=t.hookTimer/50,le.skill.active||(this.skillT-=e,this.skillT<=0&&(this.skillT=1.2+Math.random()*1.8,le.skill.start(i=>{i==="miss"&&(t.hookTimer-=10,ye.gurgle(t.post.hang,6,.5))},{size:40,great:0,dur:1}))))}updateCamera(t){let e=this.player,i=.0022*ve.sens;this.camYaw-=hc*i,this.camPitch-=uc*i*(ve.invert?-1:1),Ae.has("ArrowLeft")&&(this.camYaw+=t*2.2),Ae.has("ArrowRight")&&(this.camYaw-=t*2.2),hc=uc=0,this.camPitch=ne(this.camPitch,-1.25,.95);let n,r=3.4,a=.5;e.health==="hooked"||e.health==="carried"?(n=it(e.pos.x,e.pos.y+(e.health==="carried"?0:1.4),e.pos.z),r=4.2,a=0):n=it(e.pos.x,e.pos.y+(e.health==="downed"?.55:e.crouch?1.05:1.62),e.pos.z),e.health==="downed"&&(r=2.5),(e.health==="dead"||e.health==="escaped")&&(n=this.camPos.clone(),r=.001,a=0);let o=Math.cos(this.camPitch),l=Math.sin(this.camPitch),c=it(Math.sin(this.camYaw)*o,l,Math.cos(this.camYaw)*o),h=it(-Math.cos(this.camYaw),0,Math.sin(this.camYaw)),u=n.clone().addScaledVector(h,a),d=this.world.raycast(n,u),f=n.clone().lerp(u,Math.max(0,d-.15)),g=f.clone().addScaledVector(c,-r);d=this.world.raycast(f,g);let x=f.clone().lerp(g,Math.max(.04,d-.08));x.y=Math.max(x.y,.3),e.alive&&this.camPos.lerp(x,1-Math.exp(-t*30)),ae.position.copy(this.camPos);let m=this.killer,p=this.hitShake*.06;m.lament&&e.watching&&(p+=.012),this.hitShake=Math.max(0,this.hitShake-t*2.5),ae.position.x+=(Math.random()-.5)*p,ae.position.y+=(Math.random()-.5)*p,ae.lookAt(ae.position.clone().add(c)),ae.updateMatrixWorld(),ye.setListener(ae.position,c)}update(t){this.time+=t;let e=this.player,i=this.killer;if(dn.has("Space")&&le.skill.press(),e.health==="carried"){let c=dn.has("KeyA")?"A":dn.has("KeyD")?"D":null;c&&c!==this.lastWiggleKey&&(e.wiggle+=.035,this.lastWiggleKey=c)}for(let c of this.survivors)c.update(t);this.updateCamera(t),this.computeWatch(t),i.update(t);for(let c of this.bells)c.update(t),c.locked&&(c.model.userData.light.intensity=.15,c.model.userData.halo.material.opacity=.03);for(let c of this.pallets)c.update(t);for(let c of this.posts)c.update(t);for(let c of this.gates)c.update(t);for(let c of this.sentinels)c.update(t);le.skill.update(t);for(let c of this.survivors)c.standing&&Math.abs(c.pos.z)>jt+2.4&&c.escape("gate");let n=this.survivors.filter(c=>c.alive);if(!this.hatch&&n.length===1&&n[0].standing&&this.survivors.length>1&&(this.hatch=new ia(this,this.world.hatchSpot),this.toast("You hear water rising in an old well\u2026","warn")),this.collapseT!==null&&(this.collapseT-=t,this.collapseT<=0)){this.collapseT=0;for(let c of this.survivors)c.alive&&c.die("collapse");this.collapseT=null}if(this.afterCD-=t,this.auraT-=t,e.hasPerk("kinship")){let c=this.survivors.find(h=>h.health==="hooked");c&&rt(c.post.pos,e.pos)<24&&(this.auraT=Math.max(this.auraT,.2),(this.auraSrc!=="afterimage"||this.auraT<=.2)&&(this.auraSrc="kinship"))}i.aura.visible=this.auraT>0&&e.alive;for(let c of this.survivors)c.aura.visible=!c.isPlayer&&c.alive&&(c.health==="hooked"||c.health==="downed"||c.health==="carried");for(this.noises=this.noises.filter(c=>this.time-c.t<6),this.scratches.length>300&&this.scratches.splice(0,this.scratches.length-300);this.scratches.length&&this.time-this.scratches[0].t>12;)this.scratches.shift();e.alive&&this.addScore("survival",2*t);let r=rt(i.pos,e.pos),a=0;i.target===e&&i.state==="chase"?a=ne(1.2-r/26,.25,1):r<14&&i.moving&&(a=.35),e.alive||(a=0),this.chase+=(a-this.chase)*Math.min(1,t*1.5),ye.update(t,{listener:ae.position,chase:this.chase,breath:e.health==="injured"||e.health==="downed"?1:e.resolve<30?.6:0,lament:i.lament&&e.watching?1:0});let o=fi.uniforms,l=e.blinkT>0?Math.min(1,Math.min((e.blinkDur-e.blinkT)/.07,e.blinkT/.12)):0;o.uBlink.value=l,o.uLow.value=ne(1-e.resolve/(e.maxResolve*.4),0,1),o.uLament.value+=((i.lament&&e.watching?1:0)-o.uLament.value)*Math.min(1,t*3),o.uHurt.value=e.health==="injured"?.6:e.health==="downed"||e.health==="hooked"?1:0,o.uHit.value=this.hitShake,this.fadeIn=ne((performance.now()-this.matchStart)/1800,0,1),o.uFade.value=1-this.fadeIn,this.endT!==null&&(this.endT-=t,o.uFade.value=Math.max(o.uFade.value,ne(1-this.endT/2.5,0,1)),this.endT<=0&&this.showEnd()),le.prompt(this.promptText,this.promptProg,this.promptHeal),Yt("wiggle").style.display=e.health==="carried"?"block":"none",e.health==="carried"&&(Yt("wiggle").querySelector("i").style.width=e.wiggle*100+"%"),le.updateHud(this)}updateAmbient(t){var n;let e=this.world;if(!e)return;e.grassUniforms.uTime.value=this.time,e.mistUniforms.uTime.value=this.time,e.mistUniforms.uCam.value.copy(ae.position),e.sky.material.uniforms.uTime.value=this.time,e.sky.position.copy(ae.position);for(let r of this.flickers||[])r.intensity=((n=r.userData).base??(n.base=r.intensity))*(.85+Math.sin(this.time*11+r.id)*.08+(Math.random()-.5)*.1);let i=this.state==="playing"?this.player.pos:it(-4,0,0);hi.target.position.set(i.x,0,i.z),hi.position.copy(hi.target.position).addScaledVector(e.moonDir,70),this.fx.ambient(t,ae.position,e.pools),this.fx.update(t)}updateTitle(t){this.time+=t,this.titleT+=t;let e=this.titleCam||{a:-1.75,r:22},i=e.a+Math.sin(this.titleT*.05)*.2;ae.position.set(-4+Math.cos(i)*e.r,2.4+Math.sin(this.titleT*.2)*.2,Math.sin(i)*e.r),ae.lookAt(-3.5,2.6,-8.2),ae.updateMatrixWorld();for(let n of this.bells)n.update(t);this.titleStart??(this.titleStart=performance.now()),fi.uniforms.uFade.value=ne(1-(performance.now()-this.titleStart)/2e3,0,1),fi.uniforms.uBlink.value=0,fi.uniforms.uLow.value=0,fi.uniforms.uHurt.value=0,fi.uniforms.uLament.value=0,fi.uniforms.uHit.value=0,ye.setListener(ae.position,ae.getWorldDirection(it())),ye.update(t,{listener:ae.position,chase:0,breath:0,lament:0})}showEnd(){this.endT=null,this.state="ended",document.exitPointerLock?.();let t=this.player,e=Yt("verdict"),i=Yt("epitaph"),n=t.health==="escaped";e.textContent=n?"ESCAPED":this.endReason==="bled"?"BLED OUT":this.endReason==="collapse"?"THE MOOR ROSE":"SACRIFICED",e.className="verdict "+(n?"good":"bad");let r=n?["You walked out through the lychgate and never looked back. You didn't dare to.","Behind you the bells kept ringing, though no one was pulling the ropes.","You climbed out of the Drowned Well, soaked and shaking, but alive."]:["The peat closed over your head. The bells will need a new mourner.","You blinked. That was all it took.","The moor keeps everything it is given."];i.textContent=n?this.endReason==="hatch"?r[2]:r[Math.floor(Math.random()*2)]:r[Math.floor(Math.random()*3)],Yt("results").innerHTML=this.survivors.map(c=>{let h={escaped:["Escaped","var(--ok)"],dead:["Taken by the moor","var(--blood-hi)"]}[c.health]||["Still on the moor","var(--muted)"];return`<div class="r">${xr(c.def,42,c.health==="dead"?"dead":"")}<div><b>${c.name}${c.isPlayer?" (you)":""}</b><span style="color:${h[1]}">${h[0]}</span></div></div>`}).join("");let a=this.score,o=Math.round(a.objectives+a.survival+a.altruism+a.boldness);Yt("emberTotal").textContent=o.toLocaleString(),Yt("score").innerHTML=[["Objectives",a.objectives],["Survival",a.survival],["Altruism",a.altruism],["Boldness",a.boldness]].map(([c,h])=>`<div class="c"><div class="v">${Math.round(h).toLocaleString()}</div><div class="l">${c}</div></div>`).join("");let l={};for(let c of this.scoreLog){let h=c.replace(/ \+\d+$/,"");l[h]=(l[h]||0)+1}Yt("scoreLog").innerHTML=Object.entries(l).map(([c,h])=>`<div>${c}${h>1?` \xD7${h}`:""}</div>`).join("")+`<div>Bells rung by the four: ${this.bellsRung} / 7</div>`;try{let c=Number(localStorage.getItem("hollowmoor.best")||0);o>c&&(localStorage.setItem("hollowmoor.best",String(o)),Yt("scoreLog").innerHTML+='<div style="color:var(--ember)">A new personal best</div>')}catch{}le.only("end")}},Os=0,Ai=["unblinking","afterimage","ropeburn","kinship"];try{let s=JSON.parse(localStorage.getItem("hollowmoor.loadout")||"null");s&&(Os=s.c??0,Ai=s.p??Ai)}catch{}function fc(){let s=Yt("survivorCards");s.innerHTML=Zo.map((e,i)=>`<div class="card ${i===Os?"sel":""}" data-i="${i}">${xr(e,64)}<div><b>${e.name}</b><div class="t">${e.title}</div><div class="bio">${e.bio}</div></div></div>`).join(""),s.querySelectorAll(".card").forEach(e=>e.onclick=()=>{Os=Number(e.dataset.i),ye.uiClick(),fc()});let t=Yt("perkCards");t.innerHTML=lc.map(e=>`<div class="perk ${Ai.includes(e.id)?"sel":""}" data-id="${e.id}"><div class="d">${e.icon}</div><div><b>${e.name}</b><span>${e.desc}</span></div></div>`).join(""),t.querySelectorAll(".perk").forEach(e=>e.onclick=()=>{let i=e.dataset.id;Ai.includes(i)?Ai=Ai.filter(n=>n!==i):Ai.length<4&&Ai.push(i),ye.uiClick(),fc()}),Yt("perkCount").textContent=`${Ai.length} / 4`}var Sx="title";document.querySelectorAll("[data-go]").forEach(s=>s.addEventListener("click",()=>{ye.init(),ye.setVolume(ve.vol),ye.uiClick();let t=s.dataset.go;Sx=Zt?.state==="paused"?"pause":"title",t==="select"&&fc(),Zt?.state==="paused"?le.only("hud",t):le.only(t)}));document.querySelectorAll("[data-back]").forEach(s=>s.addEventListener("click",()=>{ye.uiClick(),Zt?.state==="paused"?le.only("hud","pause"):le.only("title")}));Yt("startBtn").addEventListener("click",()=>{ye.init(),ye.setVolume(ve.vol);try{localStorage.setItem("hollowmoor.loadout",JSON.stringify({c:Os,p:Ai}))}catch{}br(),Zt.startMatch(Os,Ai.slice())});Yt("resumeBtn").addEventListener("click",()=>Zt.resume());Yt("abandonBtn").addEventListener("click",()=>Zt.abandon());Yt("againBtn").addEventListener("click",()=>{br(),Zt.startMatch(Os,Ai.slice())});Yt("toTitleBtn").addEventListener("click",()=>{Zt.disposeMatch(),Zt.world=null,Zt.setupTitle()});Yt("clickPlay").addEventListener("click",()=>br());var pc=Yt("sens"),mc=Yt("vol"),_r=Yt("quality"),gc=Yt("invert"),xc=Yt("showFps");pc.value=ve.sens;mc.value=ve.vol;_r.value=ve.quality;gc.checked=ve.invert;xc.checked=ve.showFps;pc.oninput=()=>{ve.sens=Number(pc.value),Mr()};mc.oninput=()=>{ve.vol=Number(mc.value),ye.setVolume(ve.vol),Mr()};_r.onchange=()=>{ve.quality=_r.value,Mr(),hi.shadow.mapSize.set(_r.value==="high"?2048:1024,_r.value==="high"?2048:1024),hi.shadow.map?.dispose(),hi.shadow.map=null,Yu()};gc.onchange=()=>{ve.invert=gc.checked,Mr()};xc.onchange=()=>{ve.showFps=xc.checked,Mr(),Yt("fps").style.display=ve.showFps?"block":"none"};var Vu=performance.now(),la=0,cc=0;function Zu(s){requestAnimationFrame(Zu);let t=Math.min(.05,(s-Vu)/1e3);Vu=s;let e=t;if(Zt){if(la+=t,cc++,la>.5&&(Yt("fps").textContent=`${Math.round(cc/la)} fps`,la=0,cc=0),Zt.state==="playing")for(;t>0;){let i=Math.min(t,.03333333333333333);Zt.update(i),t-=i,dn.clear()}else Zt.state==="title"?Zt.updateTitle(t):Zt.state==="paused"||Zt.state;dn.clear(),Zt.state!=="paused"&&Zt.updateAmbient(e),fi.uniforms.uTime.value=performance.now()/1e3,Dn.render()}}try{matchMedia("(pointer: coarse)").matches&&!matchMedia("(pointer: fine)").matches&&(Yt("touchNote").hidden=!1)}catch{}async function Ex(){let s=await Cu((e,i)=>{Yt("loadBar").style.width=e*80+"%",Yt("loadText").textContent={ground:"Cutting the peat\u2026",stone:"Laying the stones\u2026",planks:"Sawing the pallets\u2026",bronze:"Casting the bells\u2026",statue:"Carving the saint\u2026",mask:"Weeping\u2026",bark:"Killing the trees\u2026"}[i]||Yt("loadText").textContent}),t=Lu(s);Yt("loadText").textContent="Drowning the parish\u2026",Yt("loadBar").style.width="90%",await new Promise(e=>setTimeout(e,20)),Zt=new dc(s,t),window.__G=Zt,window.__R={renderer:Ri,scene:ni,hemi:qu,moon:hi,get grade(){return fi},get bloom(){return ca},camera:ae},Zt.setupTitle(),ae.position.set(10,4,20),ae.lookAt(0,2,0),Ri.compile(ni,ae),Yt("loadBar").style.width="100%",le.show("loading",!1),le.only("title"),requestAnimationFrame(Zu)}Ex().catch(s=>{console.error(s),Yt("loadText").textContent="The vigil failed to begin: "+s.message});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
