(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1606],{84170:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/seo/web-performance",function(){return n(84798)}])},43896:function(e,t,n){"use strict";n.d(t,{n:function(){return p}});var r=n(8149),i=n(56512),o=n.n(i),s=n(67681),a=n(14517),c=n(65090);function d(e){let{videoSrc:t,video:n,renderImage:i,src:o,alt:s}=e;return o?t||n?(0,r.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o}):i?i(e):(0,r.jsx)("img",{alt:s,src:o||null}):null}class l extends s.Component{static defaultProps={lazy:!0};state={src:this.props.lazy?void 0:this.props.videoSrc||this.props.src};handleIntersect=e=>{e.isIntersecting&&this.setState({src:this.props.videoSrc||this.props.src})};render(){let{caption:e,width:t,height:n,margin:i=40,video:s=!1,videoSrc:l,captionSpacing:p=null,renderImage:h,oversize:f=!0,float:u,lazy:x,shadow:m,style:b,...g}=this.props,y=`${String(n/t*100)}%`;return(0,r.jsx)(c.Z,{disabled:!x,onIntersect:this.handleIntersect,once:!0,rootMargin:"20%",children:(0,r.jsxs)("figure",{className:o().dynamic([["81b81d1497280bfc",[i,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,i,i,t,u,i,u]]])+" "+((0,a.W)({oversize:t>650&&f,float:u&&t<520})||""),children:[(0,r.jsxs)("div",{className:o().dynamic([["81b81d1497280bfc",[i,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,i,i,t,u,i,u]]])+" container",children:[(0,r.jsx)("div",{style:{paddingBottom:y,...b},className:o().dynamic([["81b81d1497280bfc",[i,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,i,i,t,u,i,u]]]),children:(0,r.jsx)(d,{alt:g.alt,height:n,renderImage:h,video:s,videoSrc:l,width:t,...g,src:this.state.src})}),e?(0,r.jsx)("figcaption",{style:p?{marginTop:p}:{},className:o().dynamic([["81b81d1497280bfc",[i,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,i,i,t,u,i,u]]]),children:e}):null]}),(0,r.jsx)(o(),{id:"81b81d1497280bfc",dynamic:[i,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,i,i,t,u,i,u],children:`figure.__jsx-style-dynamic-selector{display:block;text-align:center;margin:${i}px 0}.container.__jsx-style-dynamic-selector{margin:0 auto;${t?`width: ${t}px;`:""}
                max-width: 100%;}@media screen and (max-width:320px){.container.__jsx-style-dynamic-selector{width:100%}}div.__jsx-style-dynamic-selector{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative}figure.__jsx-style-dynamic-selector img,figure.__jsx-style-dynamic-selector video{height:100%;left:0;position:absolute;top:0;width:100%;${m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":""}
              }figcaption.__jsx-style-dynamic-selector{color:#999;font-size:12px;margin:0;text-align:center}@media(min-width:1200px){figure.oversize.__jsx-style-dynamic-selector{width:${t}px;margin:${i}px 0 ${i}px -webkit-calc(((${t}px - 650px) / 2) * -1);margin:${i}px 0 ${i}px -moz-calc(((${t}px - 650px) / 2) * -1);margin:${i}px 0 ${i}px calc(((${t}px - 650px) / 2) * -1)}figure.float.__jsx-style-dynamic-selector{float:${u};margin:${i}px;margin-${u}:-150px}}`})]})})}}function p(e){return(0,r.jsx)(l,{...e,alt:"",video:!0})}t.Z=function(e){return(0,r.jsx)(l,{...e,alt:""})}},65090:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67681),i=n(81851);function o(e,t){return a(t.root,e.root)&&a(t.rootMargin,e.rootMargin)&&a(t.threshold,e.thresholds)}function s(e){if(!/^-?\d*\.?\d+(?:px|%)$/.test(e))throw Error("rootMargin must be specified as a CSS margin property")}function a(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length?e.every((n,r)=>a(e[r],t[r])):e===t}n(81324);let c=function(){let e=new Map;function t(t){return e.has(t)?e.get(t):e.set(t,new Map).get(t)}function n(e,n){for(let r of e){let e=t(n),i=e.get(r.target);i&&i(r)}}return{getObserver:function(t){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{root:t.root||null,rootMargin:function(e){let t=(e||"0px").trim().split(/\s+/);return t.forEach(s),t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t.join(" ")}(t.rootMargin),threshold:Array.isArray(e=t.threshold)?e:[void 0!==e?e:0]}}(t);for(let t of e.keys())if(o(t,n))return t;return null}(t)||new IntersectionObserver(n,t)},observeTarget:function(e,n,r){let i=t(e);i.set(n,r),e.observe(n)},unobserveTarget:function(e,n){let r=t(e);r.delete(n),e.unobserve(n)}}}(),{getObserver:d}=c,{observeTarget:l}=c,{unobserveTarget:p}=c;class h extends r.Component{static defaultProps={disabled:!1,once:!1};shouldReobserve=!1;componentDidMount(){this.observer=d(f(this.props)),this.observe()}UNSAFE_componentWillReceiveProps(e){let t=f(e);o(this.observer,t)||(this.unobserve(),this.observer=d(t),this.shouldReobserve=!0),this.props.disabled&&!e.disabled&&(this.shouldReobserve=!0),!this.props.disabled&&e.disabled&&this.unobserve()}componentDidUpdate(){this.shouldReobserve&&(this.observe(),this.shouldReobserve=!1)}componentWillUnmount(){this.unobserve()}handleTarget=e=>{let t=e&&Object.prototype.hasOwnProperty.call(e,"getBoundingClientRect")?e:(0,i.findDOMNode)(e);this.target&&this.target!==t&&(this.unobserve(),this.shouldReobserve=!0),this.target=t};observe(){this.props.disabled||l(this.observer,this.target,this.handleIntersect)}unobserve(){p(this.observer,this.target)}handleIntersect=e=>{this.props.onIntersect(e,this.props.value),this.props.once&&e.isIntersecting&&this.unobserve()};render(){return this.props.render?this.props.render({innerRef:this.handleTarget}):(0,r.cloneElement)(r.Children.only(this.props.children),{ref:this.handleTarget})}}let f=e=>({root:e.root,rootMargin:e.rootMargin,threshold:e.threshold})},4758:function(e,t,n){"use strict";n.d(t,{H3:function(){return s},H4:function(){return a},H5:function(){return c}});var r=n(8149),i=n(56512),o=n.n(i);function s(e){let{children:t}=e;return(0,r.jsxs)("h3",{className:"jsx-f28bd670423c9152",children:[t,(0,r.jsx)(o(),{id:"f28bd670423c9152",children:"h3.jsx-f28bd670423c9152{font-weight:bold;font-size:18px}h3.jsx-f28bd670423c9152 code{margin-left:6px;margin-right:6px}"})]})}function a(e){let{children:t,isCommand:n}=e;return(0,r.jsxs)("h4",{className:"jsx-78840f56e29ac759 "+((n?"command":"")||""),children:[t,(0,r.jsx)(o(),{id:"78840f56e29ac759",children:"h4.jsx-78840f56e29ac759{font-weight:bold;font-size:16px}.command.jsx-78840f56e29ac759{color:#bd10e0;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;font-size:.9em}h4.jsx-78840f56e29ac759 code{margin-left:6px;margin-right:6px}"})]})}function c(e){let{children:t}=e;return(0,r.jsxs)("h5",{className:"jsx-ed7f7d0730484ac7",children:[t,(0,r.jsx)(o(),{id:"ed7f7d0730484ac7",children:"h5.jsx-ed7f7d0730484ac7{font-weight:bold;font-size:15px}h5.jsx-ed7f7d0730484ac7 code{margin-left:6px;margin-right:6px}"})]})}},30681:function(e,t,n){"use strict";n.d(t,{h$:function(){return p},mj:function(){return l}});var r=n(8149),i=n(56512),o=n.n(i),s=n(14517),a=n(30036),c=n(69135),d=n.n(c);function l(e){return!e.href.startsWith("/")||e.href.startsWith("/docs")||e.href.startsWith("/api")?e.href.includes("@")||e.href.startsWith("#")?(0,r.jsx)(h,{...e}):(0,r.jsx)(f,{...e}):(0,r.jsx)(p,{...e})}function p(e){let{href:t,as:n="",children:i,error:o=!1,underlineOnHover:c=!0}=e;return(0,r.jsx)(a.r,{as:n,className:(0,s.W)(d().link,{[d().error]:o,[d().hoverUnderline]:c}),href:t,children:i})}function h(e){let{href:t,onClick:n,children:i,underlineOnHover:s=!0}=e;return(0,r.jsxs)("a",{href:t,onClick:n,className:o().dynamic([["eaba3d76198da0dc",[s?"underline":"none"]]]),children:[i,(0,r.jsx)(o(),{id:"eaba3d76198da0dc",dynamic:[s?"underline":"none"],children:`a.__jsx-style-dynamic-selector{text-decoration:none;color:#0070f3;font-size:inherit;cursor:pointer}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:${s?"underline":"none"};-moz-text-decoration:${s?"underline":"none"};text-decoration:${s?"underline":"none"}}`})]})}function f(e){let{href:t,children:n}=e;return(0,r.jsxs)("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"jsx-3da361ed9bbc2b1",children:[n,(0,r.jsx)(o(),{id:"3da361ed9bbc2b1",children:"a.jsx-3da361ed9bbc2b1{text-decoration:none;color:#0070f3;font-size:inherit}a.jsx-3da361ed9bbc2b1:hover{text-decoration:underline}"})]})}},39928:function(e,t,n){"use strict";n.d(t,{LI:function(){return l},OL:function(){return d},UL:function(){return c}});var r=n(8149),i=n(56512),o=n.n(i),s=n(69480),a=n.n(s);function c(e){let{children:t}=e;return(0,r.jsxs)("ul",{className:"jsx-571896de3ffb79ac",children:[t,(0,r.jsx)(o(),{id:"571896de3ffb79ac",children:'ul.jsx-571896de3ffb79ac{padding:0;list-style-type:none;margin-left:15px}ul.jsx-571896de3ffb79ac>li::before{content:"-";display:inline-block;color:#999;position:absolute;margin-left:-15px}'})]})}function d(e){let{children:t}=e;return(0,r.jsxs)("ol",{className:"jsx-fb2728ad24ced75e",children:[t,(0,r.jsx)(o(),{id:"fb2728ad24ced75e",children:"ol.jsx-fb2728ad24ced75e{padding:0;margin-left:15px}"})]})}function l(e){let{children:t,fontSize:n}=e;return(0,r.jsxs)("li",{className:o().dynamic([["d489cf15d2c12258",[n||"14px"]]]),children:[t,(0,r.jsx)(o(),{id:"d489cf15d2c12258",dynamic:[n||"14px"],children:`li.__jsx-style-dynamic-selector{${n||"14px"};line-height:24px;margin-bottom:10px}`})]})}c.propTypes={children:a().oneOfType([a().arrayOf(a().node),a().node])},d.propTypes={children:a().oneOfType([a().arrayOf(a().node),a().node])},l.propTypes={children:a().oneOfType([a().arrayOf(a().node),a().node]),fontSize:a().string}},8472:function(e,t,n){"use strict";n.d(t,{P:function(){return c}});var r=n(8149),i=n(56512),o=n.n(i),s=n(69480),a=n.n(s);function c(e){let{className:t="",children:n,large:i,fontSize:s}=e;return(0,r.jsxs)("p",{className:o().dynamic([["250a25f4b2912b42",[s||(i?"18px":"14px")]]])+" "+(t||""),children:[n,(0,r.jsx)(o(),{id:"250a25f4b2912b42",dynamic:[s||(i?"18px":"14px")],children:`p.__jsx-style-dynamic-selector{font-weight:400;font-size:${s||(i?"18px":"14px")};line-height:24px}`})]})}function d(e){let{children:t}=e;return(0,r.jsxs)("span",{className:"jsx-4a4877b22e18241e",children:[t,(0,r.jsx)(o(),{id:"4a4877b22e18241e",children:"span.jsx-4a4877b22e18241e{font-weight:600}"})]})}c.propTypes={className:a().string,large:a().bool,children:a().oneOfType([a().arrayOf(a().node),a().node]),fontSize:a().string},a().oneOfType([a().arrayOf(a().node),a().node]),d.propTypes={children:a().oneOfType([a().arrayOf(a().node),a().node])},a().oneOfType([a().arrayOf(a().node),a().node]),c.B=d},84798:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p},meta:function(){return c}}),n(52983);var r=n(44993),i=n(34682),o=n(39928);n(4758);var s=n(8472);n(43896);var a=n(30681);let c={title:"Web Performance & Core Web Vitals",courseId:"seo",lessonId:"web-performance"},d={meta:c},l=e=>{let{children:t}=e;return(0,r.kt)(i.Z,{meta:c},t)};function p(e){let{components:t,...n}=e;return(0,r.kt)(l,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.P,{fontSize:"16px",mdxType:"P"},(0,r.kt)(a.mj,{href:"https://web.dev/vitals/",mdxType:"Link"},"Web Vitals")," is an initiative created by Google to provide unified guidance and metrics to measure end-user page experience on the web."),(0,r.kt)(s.P,{fontSize:"16px",mdxType:"P"},(0,r.kt)(a.mj,{href:"https://developers.google.com/search/blog/2020/11/timing-for-page-experience",mdxType:"Link"},"Core Web Vitals")," ","is a subset of Web Vitals, and currently consists of three metrics that measure loading, interactivity, and visual stability. These metrics are"," ",(0,r.kt)(a.mj,{href:"/learn/seo/web-performance/lcp",mdxType:"Link"},"Largest Contentful Paint (LCP)"),", ",(0,r.kt)(a.mj,{href:"/learn/seo/web-performance/fid",mdxType:"Link"},"First Input Delay (FID)"),", and"," ",(0,r.kt)(a.mj,{href:"/learn/seo/web-performance/cls",mdxType:"Link"},"Cumulative Layout Shift (CLS)"),"."),(0,r.kt)(s.P,{fontSize:"16px",mdxType:"P"},"Achieving a great score in these three metrics will create a smoother website experience for your users."),(0,r.kt)(s.P,{fontSize:"16px",mdxType:"P"},"Websites scoring poorly in each of the Core Web Vitals metrics will impact its search engine ranking as Google starts to use"," ",(0,r.kt)(a.mj,{href:"https://developers.google.com/search/blog/2020/11/timing-for-page-experience",mdxType:"Link"},"Core Web Vitals as a ranking factor")," ","for their search algorithm. Poor vitals can have an impact on your web traffic and business."),(0,r.kt)(s.P,{fontSize:"16px",mdxType:"P"},"In this lesson, you’ll learn:"),(0,r.kt)(o.UL,{mdxType:"UL"},(0,r.kt)(o.LI,{fontSize:"16px",mdxType:"LI"},"A short background on Core Web Vitals."),(0,r.kt)(o.LI,{fontSize:"16px",mdxType:"LI"},"Implications of Core Web Vitals in SEO and UX, and its impact on your website."),(0,r.kt)(o.LI,{fontSize:"16px",mdxType:"LI"},"Why you should care about Core Web Vitals in your development process and how to measure them."," "),(0,r.kt)(o.LI,{fontSize:"16px",mdxType:"LI"},"How to improve your Core Web Vitals with Next.js and monitor changes.")))}p.isMDXComponent=!0},69135:function(e){e.exports={link:"link_link__8vjBa",error:"link_error__nW_2H",hoverUnderline:"link_hoverUnderline___vgMl"}}},function(e){e.O(0,[9774,6587,7181,910,193,4221,1324,3085,276,296,9454,4682,2888,179],function(){return e(e.s=84170)}),_N_E=e.O()}]);