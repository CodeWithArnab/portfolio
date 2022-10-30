(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(357)}])},9749:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return d.ImageLoaderProps}}),t.default=function(e){let t,a;var n,{src:s,sizes:f,unoptimized:x=!1,priority:w=!1,loading:b,className:v,quality:y,width:j,height:E,fill:k,style:C,onLoad:N,onLoadingComplete:S,placeholder:_="empty",blurDataURL:I}=e,O=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL"]);let P=o.useContext(A.ImageConfigContext),B=o.useMemo(()=>{let e=m||P||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:a})},[P]),D=O,R=D.loader||u.default;if(delete D.loader,"__next_img_default"in R){if("custom"===B.loader)throw Error('Image with src "'.concat(s,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let z=R;R=e=>{let{config:t}=e,a=i(e,["config"]);return z(a)}}let Q="",M=g(j),G=g(E);if("object"==typeof(n=s)&&(h(n)||void 0!==n.src)){let W=h(s)?s.default:s;if(!W.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(!W.height||!W.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)));if(t=W.blurWidth,a=W.blurHeight,I=I||W.blurDataURL,Q=W.src,!k){if(M||G){if(M&&!G){let L=M/W.width;G=Math.round(W.height*L)}else if(!M&&G){let T=G/W.height;M=Math.round(W.width*T)}}else M=W.width,G=W.height}}let U=!w&&("lazy"===b||void 0===b);((s="string"==typeof s?s:Q).startsWith("data:")||s.startsWith("blob:"))&&(x=!0,U=!1),B.unoptimized&&(x=!0);let[V,F]=o.useState(!1),[H,J]=o.useState(!1),K=g(y),Z=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},H?{}:{color:"transparent"},C),Y="blur"===_&&I&&!V?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:M,heightInt:G,blurWidth:t,blurHeight:a,blurDataURL:I}),'")')}:{},X=function(e){let{config:t,src:a,unoptimized:r,width:n,quality:s,sizes:i,loader:o}=e;if(r)return{src:a,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,a){let{deviceSizes:r,allSizes:n}=e;if(a){let s=/(^|\s)(1?\d?\d)vw/g,i=[];for(let o;o=s.exec(a);o)i.push(parseInt(o[2]));if(i.length){let l=.01*Math.min(...i);return{widths:n.filter(e=>e>=r[0]*l),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let c=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:c,kind:"x"}}(t,n,i),d=l.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:l.map((e,r)=>"".concat(o({config:t,src:a,quality:s,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:o({config:t,src:a,quality:s,width:l[d]})}}({config:B,src:s,unoptimized:x,width:M,quality:K,sizes:f,loader:R}),q=s,$="imagesrcset",ee="imagesizes";$="imageSrcSet",ee="imageSizes";let et={[$]:X.srcSet,[ee]:X.sizes,crossOrigin:D.crossOrigin},ea=o.useRef(N);o.useEffect(()=>{ea.current=N},[N]);let er=o.useRef(S);o.useEffect(()=>{er.current=S},[S]);let en=r({isLazy:U,imgAttributes:X,heightInt:G,widthInt:M,qualityInt:K,className:v,imgStyle:Z,blurStyle:Y,loading:b,config:B,fill:k,unoptimized:x,placeholder:_,loader:R,srcString:q,onLoadRef:ea,onLoadingCompleteRef:er,setBlurComplete:F,setShowAltText:J},D);return o.default.createElement(o.default.Fragment,null,o.default.createElement(p,Object.assign({},en)),w?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+X.src+X.srcSet+X.sizes,rel:"preload",as:"image",href:X.srcSet?void 0:X.src},et))):null)};var r=a(6495).Z,n=a(2648).Z,s=a(1598).Z,i=a(7273).Z,o=s(a(7294)),l=n(a(3121)),c=a(2675),d=a(139),A=a(8730);a(670);var u=n(a(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function f(e,t,a,n,s,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===a&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==s?void 0:s.current)&&s.current(e)}})}let p=e=>{var{imgAttributes:t,heightInt:a,widthInt:n,qualityInt:s,className:l,imgStyle:c,blurStyle:d,isLazy:A,fill:u,placeholder:m,loading:h,srcString:g,config:p,unoptimized:x,loader:w,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:j,onLoad:E,onError:k}=e,C=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=A?"lazy":h,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},C,t,{width:n,height:a,decoding:"async","data-nimg":u?"fill":"1",className:l,loading:h,style:r({},c,d),ref:o.useCallback(e=>{e&&(k&&(e.src=e.src),e.complete&&f(e,g,m,b,v,y))},[g,m,b,v,y,k]),onLoad(e){let t=e.currentTarget;f(t,g,m,b,v,y)},onError(e){j(!0),"blur"===m&&y(!0),k&&k(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:a,blurWidth:r,blurHeight:n,blurDataURL:s}=e,i=r||t,o=n||a,l=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function a(e){let{config:t,src:a,width:r,quality:n}=e;return a.endsWith(".svg")&&!t.dangerouslyAllowSVG?a:"".concat(t.path,"?url=").concat(encodeURIComponent(a),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a.__next_img_default=!0,t.default=a},357:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(5893),n=a(9008),s=a.n(n),i=a(3750),o=a(8193),l=a(5675),c=a.n(l),d={src:".//_next/static/media/avatar.c41f3002.png",height:960,width:720,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AOvu7uft8OHj5unr6/T29u/w8ADg5Oje4OWfjYZyZ2TX2dzm5+cAw8rD1dzcw56MoWE31dbV1djYAImIa5SghaKQcamCgqmyt6ivnQCqsHemsmGssaiyr8OAf461s7gAr66Rt7iap6evtrfNl5ShoqGxAK6mkqOfk7acj5ySp5mbsKShrAC/uaW1q5W3o56Pa1amfGusm55xXmMVNpAkAgAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},A={src:".//_next/static/media/movie.c50fd66c.jpg",height:800,width:800,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAApg5f/8QAHBAAAQMFAAAAAAAAAAAAAAAAAgEDBAAGEhND/9oACAEBAAE/AN15sIZhFnvGvMiZwSv/xAAaEQAABwAAAAAAAAAAAAAAAAAAAQIDEkKR/9oACAECAQE/ACcjRGD/xAAYEQACAwAAAAAAAAAAAAAAAAABAgBBkf/aAAgBAwEBPwAoGttn/9k=",blurWidth:8,blurHeight:8},u={src:".//_next/static/media/e-comm1.472c9fc6.webp",height:450,width:450,blurDataURL:"data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAIAAAAAAAEAAAswZYAOAACV8v///yEAANH/+P+OAAQT7P/1/5MAAAC6/////50UAAhqsIJQMAkBAAAAAAAAAABWUDggVAAAANABAJ0BKggACAACQDglAE6AHpdxXGEAAP7F9+WX/Hz4DSjvX/T6/vkvk7WEZR5aRxZQG2GrFzfHYU3AhewSKBzYJi8FGtVJ/dXoMd3wc9c1/wAAAA==",blurWidth:8,blurHeight:8},m=a(7294);function h(){let[e,t]=(0,m.useState)(!1);return(0,r.jsxs)("div",{className:e?"dark":"",children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Arnab Debnath Portfolio"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:"bg-white px-10 md:px-20 lg:px-40 select-none dark:bg-gray-900 ",children:[(0,r.jsxs)("section",{className:"min-h-screen",children:[(0,r.jsxs)("nav",{className:"py-10 flex mb-12 justify-between",children:[(0,r.jsx)("h1",{className:"text-xl font-burtons dark:text-cyan-500",children:"Arnab Debnath"}),(0,r.jsxs)("ul",{className:"flex items-center",children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.gLD,{onClick:()=>t(!e),className:"dark:text-white cursor-pointer text-2xl"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{target:"_blank",className:"bg-gradient-to-r from-blue-900 to-cyan-500 text-white px-4 py-2 rounded-md ml-8",children:"Resume"})})]})]}),(0,r.jsxs)("div",{className:"text-center p-10 py-10",children:[(0,r.jsx)("h1",{className:e?"myName":"text-5xl py-2 text-cyan-500 font-medium  md:text-6xl",contenteditable:!0,spellcheck:"false",children:"Arnab Debnath"}),(0,r.jsx)("h3",{clasName:"text-2xl py-3 md:text-3xl ",children:"Developer and competitive programmer."}),(0,r.jsx)("p",{className:"text-md py-6 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white",children:"I am problem solver and I love to solve algorithmic problems a lot. I am a web Developer too and have worked on full stack Development"})]}),(0,r.jsxs)("div",{className:"text-5xl justify-center flex gap-16 py-3 text-gray-600",children:[(0,r.jsx)(o.wod,{className:"cursor-pointer shadow-sm rounded-xl dark:shadow-cyan-500",onClick:()=>window.open("https://twitter.com/ARNAB_2002_","_blank")}),(0,r.jsx)(o._iD,{className:"cursor-pointer shadow-sm rounded-xl dark:shadow-cyan-500",onClick:()=>window.open("https://www.linkedin.com/in/arnab-debnath-46a462215/","_blank")})]}),(0,r.jsx)("div",{className:"relative shadow-2xl dark:shadow-cyan-500 bg-none rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-1000 md:w-1000",children:(0,r.jsx)(c(),{src:d,alt:"#"})})]}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-3xl py-12 text-center dark:text-cyan-500",children:"My Projects"}),(0,r.jsxs)("p",{className:"dark:text-white text-md py-2 leading-6 text-gray-800",children:["I have done projects on ",(0,r.jsx)("span",{className:"text-cyan-500",children:"Web Development"})," , focused more on ",(0,r.jsx)("span",{className:"text-cyan-500",children:"front-end"})," part."]})]}),(0,r.jsxs)("div",{className:" lg:flex gap-10 ",children:[(0,r.jsxs)("div",{onClick:()=>window.open("https://gonkartv1.herokuapp.com/","_blank"),className:"cursor-pointer dark:shadow-lg dark:shadow-cyan-500/50 text-center shadow-lg p-10 rounded-xl my-10",children:[(0,r.jsx)(c(),{alt:"",className:"mx-auto",src:u,width:200,height:200}),(0,r.jsx)("h3",{className:"text-xl font-medium pt-8 pb-2 dark:text-cyan-400",children:"E-Commerce Website"}),(0,r.jsxs)("p",{className:"dark:text-white py-2 text-gray-800",children:["A full stack e-commerce website made by ",(0,r.jsx)("span",{className:"text-cyan-500",children:"HTML, CSS, JAVASCRIPT"})," and for the backend we have used ",(0,r.jsx)("span",{className:"text-cyan-500",children:"POSTGRESQL & PHP"})]})]}),(0,r.jsxs)("div",{onClick:()=>window.open("https://soukarja.github.io/ImdbMovieWebsite_React/","_blank"),className:" dark:shadow-lg cursor-pointer dark:shadow-cyan-500/50 text-center shadow-lg p-10 rounded-xl my-10",children:[(0,r.jsx)(c(),{alt:"",className:"mx-auto",src:A,width:200,height:200}),(0,r.jsx)("h3",{className:"text-xl font-medium pt-8 pb-2 dark:text-cyan-400",children:"Movie-DB Website"}),(0,r.jsxs)("p",{className:"dark:text-white py-2 text-gray-800",children:["A Front-End movie-rating website made by ",(0,r.jsx)("span",{className:"text-cyan-500",children:"REACT, SASS, JAVASCRIPT, REACT-HOOKS, "}),"It fetches data from   ",(0,r.jsx)("span",{className:"text-cyan-500",children:"API"})]})]})]})]})]})]})}},9008:function(e,t,a){e.exports=a(3121)},5675:function(e,t,a){e.exports=a(9749)},8357:function(e,t,a){"use strict";a.d(t,{w_:function(){return l}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(n),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function l(e){return function(t){return r.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,a){return r.createElement(t.tag,i({key:a},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var a,n=e.attr,s=e.size,l=e.title,c=o(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==s?r.createElement(s.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[13,617,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);