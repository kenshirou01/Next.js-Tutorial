(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[257],{4125:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(60834).Z,o=i(31997).Z,n=i(80792).Z,a=i(74385).Z,l=n(i(67681)),s=o(i(37156)),d=i(19436),u=i(81237),c=i(71093);i(24842);var f=o(i(5190));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[24,48,64,72,128,192,300],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,o,n,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:o,widthInt:n,qualityInt:s,className:d,imgStyle:u,blurStyle:c,isLazy:f,fill:g,placeholder:h,loading:m,srcString:v,config:w,unoptimized:b,loader:y,onLoadRef:E,onLoadingCompleteRef:S,setBlurComplete:C,setShowAltText:_,onLoad:j,onError:x}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,{loading:m,width:n,height:o,decoding:"async","data-nimg":g?"fill":"1",className:d,style:r({},u,c)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&p(e,v,h,E,S,C,b))},[v,h,E,S,C,x,b,t]),onLoad:e=>{let t=e.currentTarget;p(t,v,h,E,S,C,b)},onError:e=>{_(!0),"blur"===h&&C(!0),x&&x(e)}})))}),w=l.forwardRef((e,t)=>{let i,o;var n,{src:p,sizes:w,unoptimized:b=!1,priority:y=!1,loading:E,className:S,quality:C,width:_,height:j,fill:x,style:z,onLoad:$,onLoadingComplete:R,placeholder:k="empty",blurDataURL:O,layout:I,objectFit:M,objectPosition:P,lazyBoundary:A,lazyRoot:L}=e,N=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=l.useContext(c.ImageConfigContext),D=l.useMemo(()=>{let e=g||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[B]),F=N,W=F.loader||f.default;delete F.loader;let T="__next_img_default"in W;if(T){if("custom"===D.loader)throw Error(`Image with src "${p}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let e=W;W=t=>{let{config:i}=t,r=a(t,["config"]);return e(r)}}if(I){"fill"===I&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(z=r({},z,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!w&&(w=t)}let q="",G=m(_),Z=m(j);if("object"==typeof(n=p)&&(h(n)||void 0!==n.src)){let e=h(p)?p.default:p;if(!e.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(e)}`);if(!e.height||!e.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(e)}`);if(i=e.blurWidth,o=e.blurHeight,O=O||e.blurDataURL,q=e.src,!x){if(G||Z){if(G&&!Z){let t=G/e.width;Z=Math.round(e.height*t)}else if(!G&&Z){let t=Z/e.height;G=Math.round(e.width*t)}}else G=e.width,Z=e.height}}let U=!y&&("lazy"===E||void 0===E);((p="string"==typeof p?p:q).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,U=!1),D.unoptimized&&(b=!0),T&&p.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(b=!0);let[V,J]=l.useState(!1),[Y,H]=l.useState(!1),K=m(C),Q=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:P}:{},Y?{}:{color:"transparent"},z),X="blur"===k&&O&&!V?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:`url("data:image/svg+xml;charset=utf-8,${d.getImageBlurSvg({widthInt:G,heightInt:Z,blurWidth:i,blurHeight:o,blurDataURL:O,objectFit:Q.objectFit})}")`}:{},ee=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:a,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let n=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:n,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((e,r)=>`${l({config:t,src:i,quality:n,width:e})} ${"w"===d?e:r+1}${d}`).join(", "),src:l({config:t,src:i,quality:n,width:s[u]})}}({config:D,src:p,unoptimized:b,width:G,quality:K,sizes:w,loader:W}),et=p,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},er=l.useRef($);l.useEffect(()=>{er.current=$},[$]);let eo=l.useRef(R);l.useEffect(()=>{eo.current=R},[R]);let en=r({isLazy:U,imgAttributes:ee,heightInt:Z,widthInt:G,qualityInt:K,className:S,imgStyle:Q,blurStyle:X,loading:E,config:D,fill:x,unoptimized:b,placeholder:k,loader:W,srcString:et,onLoadRef:er,onLoadingCompleteRef:eo,setBlurComplete:J,setShowAltText:H},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},en,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19436:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:a}=e,l=r||t,s=o||i,d=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?`%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ${l} ${s}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${r&&o?"1":"20"}'/%3E${d}%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='${n}'/%3E%3C/svg%3E`:`%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='${"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' x='0' y='0' height='100%25' width='100%25' href='${n}'/%3E%3C/svg%3E`}},5190:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return`${t.path}?url=${encodeURIComponent(i)}&w=${r}&q=${o||75}`}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},10257:function(e,t,i){e.exports=i(4125)}}]);