exports.id=314,exports.ids=[314],exports.modules={6759:(e,t,i)=>{let{createProxy:r}=i(6843);e.exports=r("/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/icons-material/AccessTime.js")},2928:(e,t,i)=>{let{createProxy:r}=i(6843);e.exports=r("/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/icons-material/Place.js")},9275:(e,t,i)=>{let{createProxy:r}=i(6843);e.exports=r("/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/icons-material/Twitter.js")},6987:(e,t,i)=>{let{createProxy:r}=i(6843);e.exports=r("/Users/makcext/Desktop/vscode/aboutme/node_modules/next/dist/client/image-component.js")},4470:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(6031);let r=i(6184),s=i(4180);function o(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,d,{src:c,sizes:u,unoptimized:m=!1,priority:g=!1,loading:f,className:p,quality:h,width:x,height:b,fill:v=!1,style:w,onLoad:y,onLoadingComplete:j,placeholder:A="empty",blurDataURL:S,fetchPriority:_,layout:k,objectFit:P,objectPosition:C,lazyBoundary:I,lazyRoot:O,...U}=e,{imgConf:D,showAltText:z,blurComplete:R,defaultLoader:G}=t,E=D||s.imageConfigDefault;if("allSizes"in E)a=E;else{let e=[...E.deviceSizes,...E.imageSizes].sort((e,t)=>e-t),t=E.deviceSizes.sort((e,t)=>e-t);a={...E,allSizes:e,deviceSizes:t}}let M=U.loader||G;delete U.loader,delete U.srcSet;let B="__next_img_default"in M;if(B){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=M;M=t=>{let{config:i,...r}=t;return e(r)}}if(k){"fill"===k&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!u&&(u=t)}let T="",V=n(x),F=n(b);if("object"==typeof(i=c)&&(o(i)||void 0!==i.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,T=e.src,!v){if(V||F){if(V&&!F){let t=V/e.width;F=Math.round(e.height*t)}else if(!V&&F){let t=F/e.height;V=Math.round(e.width*t)}}else V=e.width,F=e.height}}let W=!g&&("lazy"===f||void 0===f);(!(c="string"==typeof c?c:T)||c.startsWith("data:")||c.startsWith("blob:"))&&(m=!0,W=!1),a.unoptimized&&(m=!0),B&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(m=!0),g&&(_="high");let L=n(h),N=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:C}:{},z?{}:{color:"transparent"},w),Y=R||"empty"===A?null:"blur"===A?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:V,heightInt:F,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:N.objectFit})+'")':'url("'+A+'")',q=Y?{backgroundSize:N.objectFit||"cover",backgroundPosition:N.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},K=function(e){let{config:t,src:i,unoptimized:r,width:s,quality:o,sizes:n,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:s}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,n),c=l.length-1;return{sizes:n||"w"!==d?n:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:o,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:a({config:t,src:i,quality:o,width:l[c]})}}({config:a,src:c,unoptimized:m,width:V,quality:L,sizes:u,loader:M});return{props:{...U,loading:W?"lazy":f,fetchPriority:_,width:V,height:F,decoding:"async",className:p,style:{...N,...q},sizes:K.sizes,srcSet:K.srcSet,src:K.src},meta:{unoptimized:m,priority:g,placeholder:A,fill:v}}}},6184:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:s,blurDataURL:o,objectFit:n}=e,a=r?40*r:t,l=s?40*s:i,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},4180:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7751:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return l},default:function(){return d}});let r=i(6783),s=i(4470),o=i(6031),n=i(6987),a=r._(i(4534)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},d=n.Image},4534:(e,t)=>{"use strict";function i(e){let{config:t,src:i,width:r,quality:s}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},6031:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},5904:(e,t,i)=>{e.exports=i(7751)},6314:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>S});var r=i(5036);i(2);var s=i(6843);let o=(0,s.createProxy)(String.raw`/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/material/index.js`),{__esModule:n,$$typeof:a}=o;o.default;let l=(0,s.createProxy)(String.raw`/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/material/index.js#Avatar`),d=(0,s.createProxy)(String.raw`/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/material/index.js#Box`),c=(0,s.createProxy)(String.raw`/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/material/index.js#Chip`),u=(0,s.createProxy)(String.raw`/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/material/index.js#Grid`),m=(0,s.createProxy)(String.raw`/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/material/index.js#Grow`),g=(0,s.createProxy)(String.raw`/Users/makcext/Desktop/vscode/aboutme/node_modules/@mui/material/index.js#Typography`);var f=i(2928),p=i.n(f),h=i(9275),x=i.n(h),b=i(6759),v=i.n(b);i(1789);var w=i(5904),y=i.n(w);let j={src:"/_next/static/media/avatar.ef945de6.png",height:480,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AF9iZV5RVodQTppqY5FnZJ58eKOPia2FggBcYFuHT1HKn4rQtpu6bmSwXFeXc3GXa2wAUVNRo5SFopSCwZuDlE9Lq2BfkGBfjmRgAD0/QXhlVV5RRxwrMGU+Pb5IPIdvelmLogBMS0gIHyZnX1Gumn6IdmKTSUdmgI9smrQAT1BMOzo3bGZYfW5cfG5fiXVsYnqKYYea/qs+ku9WTBAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},A=({icon:e,text:t})=>(0,r.jsxs)(d,{display:"flex",alignItems:"center",children:[r.jsx(d,{sx:{marginRight:1},children:e}),r.jsx(g,{variant:"h4",fontSize:14,sx:{textAlign:"left"},children:t})]}),S=()=>r.jsx("div",{children:r.jsx(d,{paddingBottom:1,children:(0,r.jsxs)(u,{container:!0,justifyContent:"space-evenly",children:[(0,r.jsxs)(u,{item:!0,xs:6,md:6,paddingTop:0,children:[r.jsx(l,{alt:"ext - route",sx:{width:96,height:96},children:r.jsx(y(),{src:j,alt:"ext - route",width:128,height:96})}),r.jsx(A,{icon:r.jsx(p(),{}),text:"ath, att, gr"}),r.jsx(A,{icon:r.jsx(v(),{}),text:"UTC +03:00"}),r.jsx(A,{icon:r.jsx(x(),{}),text:"@makcext"}),r.jsx(d,{})]}),(0,r.jsxs)(u,{item:!0,xs:6,md:6,children:[r.jsx(m,{in:!0,style:{transformOrigin:"0 1 0"},timeout:1e3,children:r.jsx(g,{variant:"body1",fontSize:16,sx:{textAlign:"center"},children:"frontend developer"})}),r.jsx(d,{display:"flex",justifyContent:"center",children:r.jsx(c,{sx:{fontSize:12},label:"react | ts | mobx | graphql",variant:"outlined",color:"warning"})}),r.jsx(g,{variant:"body1",sx:{textAlign:"center"},children:"let's go!"}),r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}})]})]})})})},1789:()=>{}};