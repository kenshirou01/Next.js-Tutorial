(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3161],{18062:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/seo/rendering-and-ranking",function(){return t(88661)}])},43896:function(e,n,t){"use strict";t.d(n,{n:function(){return h}});var r=t(8149),i=t(56512),s=t.n(i),o=t(67681),a=t(14517),d=t(65090);function c(e){let{videoSrc:n,video:t,renderImage:i,src:s,alt:o}=e;return s?n||t?(0,r.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s}):i?i(e):(0,r.jsx)("img",{alt:o,src:s||null}):null}class l extends o.Component{static defaultProps={lazy:!0};state={src:this.props.lazy?void 0:this.props.videoSrc||this.props.src};handleIntersect=e=>{e.isIntersecting&&this.setState({src:this.props.videoSrc||this.props.src})};render(){let{caption:e,width:n,height:t,margin:i=40,video:o=!1,videoSrc:l,captionSpacing:h=null,renderImage:p,oversize:f=!0,float:u,lazy:x,shadow:m,style:g,...b}=this.props,y=`${String(t/n*100)}%`;return(0,r.jsx)(d.Z,{disabled:!x,onIntersect:this.handleIntersect,once:!0,rootMargin:"20%",children:(0,r.jsxs)("figure",{className:s().dynamic([["81b81d1497280bfc",[i,n?`width: ${n}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",n,i,i,n,u,i,u]]])+" "+((0,a.W)({oversize:n>650&&f,float:u&&n<520})||""),children:[(0,r.jsxs)("div",{className:s().dynamic([["81b81d1497280bfc",[i,n?`width: ${n}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",n,i,i,n,u,i,u]]])+" container",children:[(0,r.jsx)("div",{style:{paddingBottom:y,...g},className:s().dynamic([["81b81d1497280bfc",[i,n?`width: ${n}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",n,i,i,n,u,i,u]]]),children:(0,r.jsx)(c,{alt:b.alt,height:t,renderImage:p,video:o,videoSrc:l,width:n,...b,src:this.state.src})}),e?(0,r.jsx)("figcaption",{style:h?{marginTop:h}:{},className:s().dynamic([["81b81d1497280bfc",[i,n?`width: ${n}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",n,i,i,n,u,i,u]]]),children:e}):null]}),(0,r.jsx)(s(),{id:"81b81d1497280bfc",dynamic:[i,n?`width: ${n}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",n,i,i,n,u,i,u],children:`figure.__jsx-style-dynamic-selector{display:block;text-align:center;margin:${i}px 0}.container.__jsx-style-dynamic-selector{margin:0 auto;${n?`width: ${n}px;`:""}
                max-width: 100%;}@media screen and (max-width:320px){.container.__jsx-style-dynamic-selector{width:100%}}div.__jsx-style-dynamic-selector{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative}figure.__jsx-style-dynamic-selector img,figure.__jsx-style-dynamic-selector video{height:100%;left:0;position:absolute;top:0;width:100%;${m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":""}
              }figcaption.__jsx-style-dynamic-selector{color:#999;font-size:12px;margin:0;text-align:center}@media(min-width:1200px){figure.oversize.__jsx-style-dynamic-selector{width:${n}px;margin:${i}px 0 ${i}px -webkit-calc(((${n}px - 650px) / 2) * -1);margin:${i}px 0 ${i}px -moz-calc(((${n}px - 650px) / 2) * -1);margin:${i}px 0 ${i}px calc(((${n}px - 650px) / 2) * -1)}figure.float.__jsx-style-dynamic-selector{float:${u};margin:${i}px;margin-${u}:-150px}}`})]})})}}function h(e){return(0,r.jsx)(l,{...e,alt:"",video:!0})}n.Z=function(e){return(0,r.jsx)(l,{...e,alt:""})}},65090:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(67681),i=t(81851);function s(e,n){return a(n.root,e.root)&&a(n.rootMargin,e.rootMargin)&&a(n.threshold,e.thresholds)}function o(e){if(!/^-?\d*\.?\d+(?:px|%)$/.test(e))throw Error("rootMargin must be specified as a CSS margin property")}function a(e,n){return Array.isArray(e)&&Array.isArray(n)&&e.length===n.length?e.every((t,r)=>a(e[r],n[r])):e===n}t(81324);let d=function(){let e=new Map;function n(n){return e.has(n)?e.get(n):e.set(n,new Map).get(n)}function t(e,t){for(let r of e){let e=n(t),i=e.get(r.target);i&&i(r)}}return{getObserver:function(n){return function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){var e;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{root:n.root||null,rootMargin:function(e){let n=(e||"0px").trim().split(/\s+/);return n.forEach(o),n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n.join(" ")}(n.rootMargin),threshold:Array.isArray(e=n.threshold)?e:[void 0!==e?e:0]}}(n);for(let n of e.keys())if(s(n,t))return n;return null}(n)||new IntersectionObserver(t,n)},observeTarget:function(e,t,r){let i=n(e);i.set(t,r),e.observe(t)},unobserveTarget:function(e,t){let r=n(e);r.delete(t),e.unobserve(t)}}}(),{getObserver:c}=d,{observeTarget:l}=d,{unobserveTarget:h}=d;class p extends r.Component{static defaultProps={disabled:!1,once:!1};shouldReobserve=!1;componentDidMount(){this.observer=c(f(this.props)),this.observe()}UNSAFE_componentWillReceiveProps(e){let n=f(e);s(this.observer,n)||(this.unobserve(),this.observer=c(n),this.shouldReobserve=!0),this.props.disabled&&!e.disabled&&(this.shouldReobserve=!0),!this.props.disabled&&e.disabled&&this.unobserve()}componentDidUpdate(){this.shouldReobserve&&(this.observe(),this.shouldReobserve=!1)}componentWillUnmount(){this.unobserve()}handleTarget=e=>{let n=e&&Object.prototype.hasOwnProperty.call(e,"getBoundingClientRect")?e:(0,i.findDOMNode)(e);this.target&&this.target!==n&&(this.unobserve(),this.shouldReobserve=!0),this.target=n};observe(){this.props.disabled||l(this.observer,this.target,this.handleIntersect)}unobserve(){h(this.observer,this.target)}handleIntersect=e=>{this.props.onIntersect(e,this.props.value),this.props.once&&e.isIntersecting&&this.unobserve()};render(){return this.props.render?this.props.render({innerRef:this.handleTarget}):(0,r.cloneElement)(r.Children.only(this.props.children),{ref:this.handleTarget})}}let f=e=>({root:e.root,rootMargin:e.rootMargin,threshold:e.threshold})},4758:function(e,n,t){"use strict";t.d(n,{H3:function(){return o},H4:function(){return a},H5:function(){return d}});var r=t(8149),i=t(56512),s=t.n(i);function o(e){let{children:n}=e;return(0,r.jsxs)("h3",{className:"jsx-f28bd670423c9152",children:[n,(0,r.jsx)(s(),{id:"f28bd670423c9152",children:"h3.jsx-f28bd670423c9152{font-weight:bold;font-size:18px}h3.jsx-f28bd670423c9152 code{margin-left:6px;margin-right:6px}"})]})}function a(e){let{children:n,isCommand:t}=e;return(0,r.jsxs)("h4",{className:"jsx-78840f56e29ac759 "+((t?"command":"")||""),children:[n,(0,r.jsx)(s(),{id:"78840f56e29ac759",children:"h4.jsx-78840f56e29ac759{font-weight:bold;font-size:16px}.command.jsx-78840f56e29ac759{color:#bd10e0;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;font-size:.9em}h4.jsx-78840f56e29ac759 code{margin-left:6px;margin-right:6px}"})]})}function d(e){let{children:n}=e;return(0,r.jsxs)("h5",{className:"jsx-ed7f7d0730484ac7",children:[n,(0,r.jsx)(s(),{id:"ed7f7d0730484ac7",children:"h5.jsx-ed7f7d0730484ac7{font-weight:bold;font-size:15px}h5.jsx-ed7f7d0730484ac7 code{margin-left:6px;margin-right:6px}"})]})}},30681:function(e,n,t){"use strict";t.d(n,{h$:function(){return h},mj:function(){return l}});var r=t(8149),i=t(56512),s=t.n(i),o=t(14517),a=t(30036),d=t(69135),c=t.n(d);function l(e){return!e.href.startsWith("/")||e.href.startsWith("/docs")||e.href.startsWith("/api")?e.href.includes("@")||e.href.startsWith("#")?(0,r.jsx)(p,{...e}):(0,r.jsx)(f,{...e}):(0,r.jsx)(h,{...e})}function h(e){let{href:n,as:t="",children:i,error:s=!1,underlineOnHover:d=!0}=e;return(0,r.jsx)(a.r,{as:t,className:(0,o.W)(c().link,{[c().error]:s,[c().hoverUnderline]:d}),href:n,children:i})}function p(e){let{href:n,onClick:t,children:i,underlineOnHover:o=!0}=e;return(0,r.jsxs)("a",{href:n,onClick:t,className:s().dynamic([["eaba3d76198da0dc",[o?"underline":"none"]]]),children:[i,(0,r.jsx)(s(),{id:"eaba3d76198da0dc",dynamic:[o?"underline":"none"],children:`a.__jsx-style-dynamic-selector{text-decoration:none;color:#0070f3;font-size:inherit;cursor:pointer}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:${o?"underline":"none"};-moz-text-decoration:${o?"underline":"none"};text-decoration:${o?"underline":"none"}}`})]})}function f(e){let{href:n,children:t}=e;return(0,r.jsxs)("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"jsx-3da361ed9bbc2b1",children:[t,(0,r.jsx)(s(),{id:"3da361ed9bbc2b1",children:"a.jsx-3da361ed9bbc2b1{text-decoration:none;color:#0070f3;font-size:inherit}a.jsx-3da361ed9bbc2b1:hover{text-decoration:underline}"})]})}},39928:function(e,n,t){"use strict";t.d(n,{LI:function(){return l},OL:function(){return c},UL:function(){return d}});var r=t(8149),i=t(56512),s=t.n(i),o=t(69480),a=t.n(o);function d(e){let{children:n}=e;return(0,r.jsxs)("ul",{className:"jsx-571896de3ffb79ac",children:[n,(0,r.jsx)(s(),{id:"571896de3ffb79ac",children:'ul.jsx-571896de3ffb79ac{padding:0;list-style-type:none;margin-left:15px}ul.jsx-571896de3ffb79ac>li::before{content:"-";display:inline-block;color:#999;position:absolute;margin-left:-15px}'})]})}function c(e){let{children:n}=e;return(0,r.jsxs)("ol",{className:"jsx-fb2728ad24ced75e",children:[n,(0,r.jsx)(s(),{id:"fb2728ad24ced75e",children:"ol.jsx-fb2728ad24ced75e{padding:0;margin-left:15px}"})]})}function l(e){let{children:n,fontSize:t}=e;return(0,r.jsxs)("li",{className:s().dynamic([["d489cf15d2c12258",[t||"14px"]]]),children:[n,(0,r.jsx)(s(),{id:"d489cf15d2c12258",dynamic:[t||"14px"],children:`li.__jsx-style-dynamic-selector{${t||"14px"};line-height:24px;margin-bottom:10px}`})]})}d.propTypes={children:a().oneOfType([a().arrayOf(a().node),a().node])},c.propTypes={children:a().oneOfType([a().arrayOf(a().node),a().node])},l.propTypes={children:a().oneOfType([a().arrayOf(a().node),a().node]),fontSize:a().string}},8472:function(e,n,t){"use strict";t.d(n,{P:function(){return d}});var r=t(8149),i=t(56512),s=t.n(i),o=t(69480),a=t.n(o);function d(e){let{className:n="",children:t,large:i,fontSize:o}=e;return(0,r.jsxs)("p",{className:s().dynamic([["250a25f4b2912b42",[o||(i?"18px":"14px")]]])+" "+(n||""),children:[t,(0,r.jsx)(s(),{id:"250a25f4b2912b42",dynamic:[o||(i?"18px":"14px")],children:`p.__jsx-style-dynamic-selector{font-weight:400;font-size:${o||(i?"18px":"14px")};line-height:24px}`})]})}function c(e){let{children:n}=e;return(0,r.jsxs)("span",{className:"jsx-4a4877b22e18241e",children:[n,(0,r.jsx)(s(),{id:"4a4877b22e18241e",children:"span.jsx-4a4877b22e18241e{font-weight:600}"})]})}d.propTypes={className:a().string,large:a().bool,children:a().oneOfType([a().arrayOf(a().node),a().node]),fontSize:a().string},a().oneOfType([a().arrayOf(a().node),a().node]),c.propTypes={children:a().oneOfType([a().arrayOf(a().node),a().node])},a().oneOfType([a().arrayOf(a().node),a().node]),d.B=c},88661:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l},meta:function(){return a}}),t(52983);var r=t(44993),i=t(34682),s=t(39928);t(4758);var o=t(8472);t(43896),t(30681);let a={title:"Rendering and Ranking",courseId:"seo",lessonId:"rendering-and-ranking"},d={meta:a},c=e=>{let{children:n}=e;return(0,r.kt)(i.Z,{meta:a},n)};function l(e){let{components:n,...t}=e;return(0,r.kt)(c,Object.assign({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(o.P,{fontSize:"16px",mdxType:"P"},"JavaScript is an important part of the web development ecosystem. In the past, most programming languages were sending all content directly from the server."),(0,r.kt)(o.P,{fontSize:"16px",mdxType:"P"},"With technology like JavaScript, fetching information from the browser became more popular than ever. This, in turn, affected search engines and their ability to understand pages, as most bots were only parsing the initial HTML from the server and loading it to the browser."),(0,r.kt)(o.P,{fontSize:"16px",mdxType:"P"},"In this lesson, we'll talk about:"),(0,r.kt)(s.UL,{mdxType:"UL"},(0,r.kt)(s.LI,{fontSize:"16px",mdxType:"LI"},"Rendering strategies, such as Client-Side Rendering (CSR), Incremental Static Regeneration (ISR), Static Site Generation (SSG), and Server-Side Rendering (SSR)."," "),(0,r.kt)(s.LI,{fontSize:"16px",mdxType:"LI"},"How URL structure can impact SEO ranking."),(0,r.kt)(s.LI,{fontSize:"16px",mdxType:"LI"},"Incorporating headings and internal links to optimize your search engine results page ranking.")),(0,r.kt)(o.P,{fontSize:"16px",mdxType:"P"},"Let's dive in!"))}l.isMDXComponent=!0},69135:function(e){e.exports={link:"link_link__8vjBa",error:"link_error__nW_2H",hoverUnderline:"link_hoverUnderline___vgMl"}}},function(e){e.O(0,[9774,6587,7181,910,193,4221,1324,3085,276,296,9454,4682,2888,179],function(){return e(e.s=18062)}),_N_E=e.O()}]);