import{getCurrentScope as Te,onScopeDispose as Oe,unref as Pe,toRef as $e,readonly as ce,customRef as qe,ref as b,onMounted as U,nextTick as G,getCurrentInstance as pe,watch as q,computed as v,watchEffect as me,shallowRef as de,inject as ue,onUnmounted as fe,reactive as Ie,markRaw as W,defineComponent as ge,h as Q}from"vue";const Tt=(e,t)=>{const a=e.__vccOpts||e;for(const[i,o]of t)a[i]=o;return a},Me="modulepreload",ze=function(e){return"/shelley/"+e},Z={},Ot=function(t,a,i){let o=Promise.resolve();if(a&&a.length>0){const l=document.getElementsByTagName("link");o=Promise.all(a.map(s=>{if(s=ze(s),s in Z)return;Z[s]=!0;const n=s.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(!!i)for(let m=l.length-1;m>=0;m--){const d=l[m];if(d.href===s&&(!n||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${r}`))return;const p=document.createElement("link");if(p.rel=n?"stylesheet":Me,n||(p.as="script",p.crossOrigin=""),p.href=s,document.head.appendChild(p),n)return new Promise((m,d)=>{p.addEventListener("load",m),p.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>t()).catch(l=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l})},He=window.__VP_SITE_DATA__;function J(e){return Te()?(Oe(e),!0):!1}function A(e){return typeof e=="function"?e():Pe(e)}const xe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ne=Object.prototype.toString,De=e=>Ne.call(e)==="[object Object]",$=()=>{},K=Ve();function Ve(){var e,t;return xe&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Ue(e,t){function a(...i){return new Promise((o,l)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(o).catch(l)})}return a}const he=e=>e();function We(e=he){const t=b(!0);function a(){t.value=!1}function i(){t.value=!0}const o=(...l)=>{t.value&&e(...l)};return{isActive:ce(t),pause:a,resume:i,eventFilter:o}}function Fe(e){return e||pe()}function ve(...e){if(e.length!==1)return $e(...e);const t=e[0];return typeof t=="function"?ce(qe(()=>({get:t,set:$}))):b(t)}function Be(e,t,a={}){const{eventFilter:i=he,...o}=a;return q(e,Ue(i,t),o)}function Xe(e,t,a={}){const{eventFilter:i,...o}=a,{eventFilter:l,pause:s,resume:n,isActive:r}=We(i);return{stop:Be(e,t,{...o,eventFilter:l}),pause:s,resume:n,isActive:r}}function we(e,t=!0,a){Fe()?U(e,a):t?e():G(e)}function P(e){var t;const a=A(e);return(t=a==null?void 0:a.$el)!=null?t:a}const _=xe?window:void 0;function C(...e){let t,a,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,i,o]=e,t=_):[t,a,i,o]=e,!t)return $;Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]);const l=[],s=()=>{l.forEach(p=>p()),l.length=0},n=(p,m,d,u)=>(p.addEventListener(m,d,u),()=>p.removeEventListener(m,d,u)),r=q(()=>[P(t),A(o)],([p,m])=>{if(s(),!p)return;const d=De(m)?{...m}:m;l.push(...a.flatMap(u=>i.map(f=>n(p,u,f,d))))},{immediate:!0,flush:"post"}),c=()=>{r(),s()};return J(c),c}let ee=!1;function Pt(e,t,a={}){const{window:i=_,ignore:o=[],capture:l=!0,detectIframe:s=!1}=a;if(!i)return $;K&&!ee&&(ee=!0,Array.from(i.document.body.children).forEach(d=>d.addEventListener("click",$)),i.document.documentElement.addEventListener("click",$));let n=!0;const r=d=>o.some(u=>{if(typeof u=="string")return Array.from(i.document.querySelectorAll(u)).some(f=>f===d.target||d.composedPath().includes(f));{const f=P(u);return f&&(d.target===f||d.composedPath().includes(f))}}),p=[C(i,"click",d=>{const u=P(e);if(!(!u||u===d.target||d.composedPath().includes(u))){if(d.detail===0&&(n=!r(d)),!n){n=!0;return}t(d)}},{passive:!0,capture:l}),C(i,"pointerdown",d=>{const u=P(e);n=!r(d)&&!!(u&&!d.composedPath().includes(u))},{passive:!0}),s&&C(i,"blur",d=>{setTimeout(()=>{var u;const f=P(e);((u=i.document.activeElement)==null?void 0:u.tagName)==="IFRAME"&&!(f!=null&&f.contains(i.document.activeElement))&&t(d)},0)})].filter(Boolean);return()=>p.forEach(d=>d())}function Ke(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function $t(...e){let t,a,i={};e.length===3?(t=e[0],a=e[1],i=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,a=e[0],i=e[1]):(t=e[0],a=e[1]):(t=!0,a=e[0]);const{target:o=_,eventName:l="keydown",passive:s=!1,dedupe:n=!1}=i,r=Ke(t);return C(o,l,p=>{p.repeat&&A(n)||r(p)&&a(p)},s)}function Ye(){const e=b(!1);return pe()&&U(()=>{e.value=!0}),e}function Ge(e){const t=Ye();return v(()=>(t.value,!!e()))}function Je(e,t={}){const{window:a=_}=t,i=Ge(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let o;const l=b(!1),s=c=>{l.value=c.matches},n=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",s):o.removeListener(s))},r=me(()=>{i.value&&(n(),o=a.matchMedia(A(e)),"addEventListener"in o?o.addEventListener("change",s):o.addListener(s),l.value=o.matches)});return J(()=>{r(),n(),o=void 0}),l}const z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H="__vueuse_ssr_handlers__",Qe=Ze();function Ze(){return H in z||(z[H]=z[H]||{}),z[H]}function ye(e,t){return Qe[e]||t}function et(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const tt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},te="vueuse-storage";function at(e,t,a,i={}){var o;const{flush:l="pre",deep:s=!0,listenToStorageChanges:n=!0,writeDefaults:r=!0,mergeDefaults:c=!1,shallow:p,window:m=_,eventFilter:d,onError:u=g=>{console.error(g)},initOnMounted:f}=i,w=(p?de:b)(typeof t=="function"?t():t);if(!a)try{a=ye("getDefaultStorage",()=>{var g;return(g=_)==null?void 0:g.localStorage})()}catch(g){u(g)}if(!a)return w;const x=A(t),j=et(x),S=(o=i.serializer)!=null?o:tt[j],{pause:I,resume:y}=Xe(w,()=>L(w.value),{flush:l,deep:s,eventFilter:d});return m&&n&&we(()=>{C(m,"storage",E),C(m,te,O),f&&E()}),f||E(),w;function L(g){try{if(g==null)a.removeItem(e);else{const h=S.write(g),R=a.getItem(e);R!==h&&(a.setItem(e,h),m&&m.dispatchEvent(new CustomEvent(te,{detail:{key:e,oldValue:R,newValue:h,storageArea:a}})))}}catch(h){u(h)}}function M(g){const h=g?g.newValue:a.getItem(e);if(h==null)return r&&x!=null&&a.setItem(e,S.write(x)),x;if(!g&&c){const R=S.read(h);return typeof c=="function"?c(R,x):j==="object"&&!Array.isArray(R)?{...x,...R}:R}else return typeof h!="string"?h:S.read(h)}function O(g){E(g.detail)}function E(g){if(!(g&&g.storageArea!==a)){if(g&&g.key==null){w.value=x;return}if(!(g&&g.key!==e)){I();try{(g==null?void 0:g.newValue)!==S.write(w.value)&&(w.value=M(g))}catch(h){u(h)}finally{g?G(y):y()}}}}}function be(e){return Je("(prefers-color-scheme: dark)",e)}function it(e={}){const{selector:t="html",attribute:a="class",initialValue:i="auto",window:o=_,storage:l,storageKey:s="vueuse-color-scheme",listenToStorageChanges:n=!0,storageRef:r,emitAuto:c,disableTransition:p=!0}=e,m={auto:"",light:"light",dark:"dark",...e.modes||{}},d=be({window:o}),u=v(()=>d.value?"dark":"light"),f=r||(s==null?ve(i):at(s,i,l,{window:o,listenToStorageChanges:n})),w=v(()=>f.value==="auto"?u.value:f.value),x=ye("updateHTMLAttrs",(y,L,M)=>{const O=typeof y=="string"?o==null?void 0:o.document.querySelector(y):P(y);if(!O)return;let E;if(p){E=o.document.createElement("style");const g="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";E.appendChild(document.createTextNode(g)),o.document.head.appendChild(E)}if(L==="class"){const g=M.split(/\s/g);Object.values(m).flatMap(h=>(h||"").split(/\s/g)).filter(Boolean).forEach(h=>{g.includes(h)?O.classList.add(h):O.classList.remove(h)})}else O.setAttribute(L,M);p&&(o.getComputedStyle(E).opacity,document.head.removeChild(E))});function j(y){var L;x(t,a,(L=m[y])!=null?L:y)}function S(y){e.onChanged?e.onChanged(y,j):j(y)}q(w,S,{flush:"post",immediate:!0}),we(()=>S(w.value));const I=v({get(){return c?f.value:w.value},set(y){f.value=y}});try{return Object.assign(I,{store:f,system:u,state:w})}catch{return I}}function nt(e={}){const{valueDark:t="dark",valueLight:a="",window:i=_}=e,o=it({...e,onChanged:(n,r)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,n==="dark",r,n):r(n)},modes:{dark:t,light:a}}),l=v(()=>o.system?o.system.value:be({window:i}).value?"dark":"light");return v({get(){return o.value==="dark"},set(n){const r=n?"dark":"light";l.value===r?o.value="auto":o.value=r}})}function F(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function je(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const a=e.parentNode;return!a||a.tagName==="BODY"?!1:je(a)}}function ot(e){const t=e||window.event,a=t.target;return je(a)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const N=new WeakMap;function qt(e,t=!1){const a=b(t);let i=null,o;q(ve(e),n=>{const r=F(A(n));if(r){const c=r;N.get(c)||N.set(c,o),a.value&&(c.style.overflow="hidden")}},{immediate:!0});const l=()=>{const n=F(A(e));!n||a.value||(K&&(i=C(n,"touchmove",r=>{ot(r)},{passive:!1})),n.style.overflow="hidden",a.value=!0)},s=()=>{var n;const r=F(A(e));!r||!a.value||(K&&(i==null||i()),r.style.overflow=(n=N.get(r))!=null?n:"",N.delete(r),a.value=!1)};return J(s),v({get(){return a.value},set(n){n?l():s()}})}function It(e={}){const{window:t=_,behavior:a="auto"}=e;if(!t)return{x:b(0),y:b(0)};const i=b(t.scrollX),o=b(t.scrollY),l=v({get(){return i.value},set(n){scrollTo({left:n,behavior:a})}}),s=v({get(){return o.value},set(n){scrollTo({top:n,behavior:a})}});return C(t,"scroll",()=>{i.value=t.scrollX,o.value=t.scrollY},{capture:!1,passive:!0}),{x:l,y:s}}const ke=/^(?:[a-z]+:|\/\/)/i,lt="vitepress-theme-appearance",Se=/#.*$/,st=/(index)?\.(md|html)$/,k=typeof document<"u",Ee={relativePath:"",filePath:"",title:"404",description:"Not Found",headers:[],frontmatter:{sidebar:!1,layout:"page"},lastUpdated:0,isNotFound:!0};function rt(e,t,a=!1){if(t===void 0)return!1;if(e=ae(`/${e}`),a)return new RegExp(t).test(e);if(ae(t)!==e)return!1;const i=t.match(Se);return i?(k?location.hash:"")===i[0]:!0}function ae(e){return decodeURI(e).replace(Se,"").replace(st,"")}function ct(e){return ke.test(e)}function pt(e,t){var i,o,l,s,n,r,c;const a=Object.keys(e.locales).find(p=>p!=="root"&&!ct(p)&&rt(t,`/${p}/`,!0))||"root";return Object.assign({},e,{localeIndex:a,lang:((i=e.locales[a])==null?void 0:i.lang)??e.lang,dir:((o=e.locales[a])==null?void 0:o.dir)??e.dir,title:((l=e.locales[a])==null?void 0:l.title)??e.title,titleTemplate:((s=e.locales[a])==null?void 0:s.titleTemplate)??e.titleTemplate,description:((n=e.locales[a])==null?void 0:n.description)??e.description,head:Ae(e.head,((r=e.locales[a])==null?void 0:r.head)??[]),themeConfig:{...e.themeConfig,...(c=e.locales[a])==null?void 0:c.themeConfig}})}function _e(e,t){const a=t.title||e.title,i=t.titleTemplate??e.titleTemplate;if(typeof i=="string"&&i.includes(":title"))return i.replace(/:title/g,a);const o=mt(e.title,i);return a===o.slice(3)?a:`${a}${o}`}function mt(e,t){return t===!1?"":t===!0||t===void 0?` | ${e}`:e===t?"":` | ${t}`}function dt(e,t){const[a,i]=t;if(a!=="meta")return!1;const o=Object.entries(i)[0];return o==null?!1:e.some(([l,s])=>l===a&&s[o[0]]===o[1])}function Ae(e,t){return[...e.filter(a=>!dt(t,a)),...t]}const ut=/[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,ft=/^[a-z]:/i;function ie(e){const t=ft.exec(e),a=t?t[0]:"";return a+e.slice(a.length).replace(ut,"_").replace(/(^|\/)_+(?=[^/]*$)/,"$1")}const gt=Symbol(),T=de(He);function Mt(e){const t=v(()=>pt(T.value,e.data.relativePath)),a=t.value.appearance,i=a==="force-dark"?b(!0):a?nt({storageKey:lt,initialValue:()=>typeof a=="string"?a:"auto",...typeof a=="object"?a:{}}):b(!1);return{site:t,theme:v(()=>t.value.themeConfig),page:v(()=>e.data),frontmatter:v(()=>e.data.frontmatter),params:v(()=>e.data.params),lang:v(()=>t.value.lang),dir:v(()=>e.data.frontmatter.dir||t.value.dir||"ltr"),localeIndex:v(()=>t.value.localeIndex||"root"),title:v(()=>_e(t.value,e.data)),description:v(()=>e.data.description||t.value.description),isDark:i}}function xt(){const e=ue(gt);if(!e)throw new Error("vitepress data not properly injected in app");return e}const ht={"3g2":"video/3gpp2","3gp":"video/3gpp","3gpp":"video/3gpp","3mf":"model/3mf",aac:"audio/aac",ac:"application/pkix-attr-cert",adp:"audio/adpcm",adts:"audio/aac",ai:"application/postscript",aml:"application/automationml-aml+xml",amlx:"application/automationml-amlx+zip",amr:"audio/amr",apng:"image/apng",appcache:"text/cache-manifest",appinstaller:"application/appinstaller",appx:"application/appx",appxbundle:"application/appxbundle",asc:"application/pgp-keys",atom:"application/atom+xml",atomcat:"application/atomcat+xml",atomdeleted:"application/atomdeleted+xml",atomsvc:"application/atomsvc+xml",au:"audio/basic",avci:"image/avci",avcs:"image/avcs",avif:"image/avif",aw:"application/applixware",bdoc:"application/bdoc",bin:"application/octet-stream",bmp:"image/bmp",bpk:"application/octet-stream",btf:"image/prs.btif",btif:"image/prs.btif",buffer:"application/octet-stream",ccxml:"application/ccxml+xml",cdfx:"application/cdfx+xml",cdmia:"application/cdmi-capability",cdmic:"application/cdmi-container",cdmid:"application/cdmi-domain",cdmio:"application/cdmi-object",cdmiq:"application/cdmi-queue",cer:"application/pkix-cert",cgm:"image/cgm",cjs:"application/node",class:"application/java-vm",coffee:"text/coffeescript",conf:"text/plain",cpl:"application/cpl+xml",cpt:"application/mac-compactpro",crl:"application/pkix-crl",css:"text/css",csv:"text/csv",cu:"application/cu-seeme",cwl:"application/cwl",cww:"application/prs.cww",davmount:"application/davmount+xml",dbk:"application/docbook+xml",deb:"application/octet-stream",def:"text/plain",deploy:"application/octet-stream",dib:"image/bmp","disposition-notification":"message/disposition-notification",dist:"application/octet-stream",distz:"application/octet-stream",dll:"application/octet-stream",dmg:"application/octet-stream",dms:"application/octet-stream",doc:"application/msword",dot:"application/msword",dpx:"image/dpx",drle:"image/dicom-rle",dsc:"text/prs.lines.tag",dssc:"application/dssc+der",dtd:"application/xml-dtd",dump:"application/octet-stream",dwd:"application/atsc-dwd+xml",ear:"application/java-archive",ecma:"application/ecmascript",elc:"application/octet-stream",emf:"image/emf",eml:"message/rfc822",emma:"application/emma+xml",emotionml:"application/emotionml+xml",eps:"application/postscript",epub:"application/epub+zip",exe:"application/octet-stream",exi:"application/exi",exp:"application/express",exr:"image/aces",ez:"application/andrew-inset",fdf:"application/fdf",fdt:"application/fdt+xml",fits:"image/fits",g3:"image/g3fax",gbr:"application/rpki-ghostbusters",geojson:"application/geo+json",gif:"image/gif",glb:"model/gltf-binary",gltf:"model/gltf+json",gml:"application/gml+xml",gpx:"application/gpx+xml",gram:"application/srgs",grxml:"application/srgs+xml",gxf:"application/gxf",gz:"application/gzip",h261:"video/h261",h263:"video/h263",h264:"video/h264",heic:"image/heic",heics:"image/heic-sequence",heif:"image/heif",heifs:"image/heif-sequence",hej2:"image/hej2k",held:"application/atsc-held+xml",hjson:"application/hjson",hlp:"application/winhlp",hqx:"application/mac-binhex40",hsj2:"image/hsj2",htm:"text/html",html:"text/html",ics:"text/calendar",ief:"image/ief",ifb:"text/calendar",iges:"model/iges",igs:"model/iges",img:"application/octet-stream",in:"text/plain",ini:"text/plain",ink:"application/inkml+xml",inkml:"application/inkml+xml",ipfix:"application/ipfix",iso:"application/octet-stream",its:"application/its+xml",jade:"text/jade",jar:"application/java-archive",jhc:"image/jphc",jls:"image/jls",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpf:"image/jpx",jpg:"image/jpeg",jpg2:"image/jp2",jpgm:"image/jpm",jpgv:"video/jpeg",jph:"image/jph",jpm:"image/jpm",jpx:"image/jpx",js:"text/javascript",json:"application/json",json5:"application/json5",jsonld:"application/ld+json",jsonml:"application/jsonml+json",jsx:"text/jsx",jt:"model/jt",jxr:"image/jxr",jxra:"image/jxra",jxrs:"image/jxrs",jxs:"image/jxs",jxsc:"image/jxsc",jxsi:"image/jxsi",jxss:"image/jxss",kar:"audio/midi",ktx:"image/ktx",ktx2:"image/ktx2",less:"text/less",lgr:"application/lgr+xml",list:"text/plain",litcoffee:"text/coffeescript",log:"text/plain",lostxml:"application/lost+xml",lrf:"application/octet-stream",m1v:"video/mpeg",m21:"application/mp21",m2a:"audio/mpeg",m2v:"video/mpeg",m3a:"audio/mpeg",m4a:"audio/mp4",m4p:"application/mp4",m4s:"video/iso.segment",ma:"application/mathematica",mads:"application/mads+xml",maei:"application/mmt-aei+xml",man:"text/troff",manifest:"text/cache-manifest",map:"application/json",mar:"application/octet-stream",markdown:"text/markdown",mathml:"application/mathml+xml",mb:"application/mathematica",mbox:"application/mbox",md:"text/markdown",mdx:"text/mdx",me:"text/troff",mesh:"model/mesh",meta4:"application/metalink4+xml",metalink:"application/metalink+xml",mets:"application/mets+xml",mft:"application/rpki-manifest",mid:"audio/midi",midi:"audio/midi",mime:"message/rfc822",mj2:"video/mj2",mjp2:"video/mj2",mjs:"text/javascript",mml:"text/mathml",mods:"application/mods+xml",mov:"video/quicktime",mp2:"audio/mpeg",mp21:"application/mp21",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mp4a:"audio/mp4",mp4s:"application/mp4",mp4v:"video/mp4",mpd:"application/dash+xml",mpe:"video/mpeg",mpeg:"video/mpeg",mpf:"application/media-policy-dataset+xml",mpg:"video/mpeg",mpg4:"video/mp4",mpga:"audio/mpeg",mpp:"application/dash-patch+xml",mrc:"application/marc",mrcx:"application/marcxml+xml",ms:"text/troff",mscml:"application/mediaservercontrol+xml",msh:"model/mesh",msi:"application/octet-stream",msix:"application/msix",msixbundle:"application/msixbundle",msm:"application/octet-stream",msp:"application/octet-stream",mtl:"model/mtl",musd:"application/mmt-usd+xml",mxf:"application/mxf",mxmf:"audio/mobile-xmf",mxml:"application/xv+xml",n3:"text/n3",nb:"application/mathematica",nq:"application/n-quads",nt:"application/n-triples",obj:"model/obj",oda:"application/oda",oga:"audio/ogg",ogg:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",omdoc:"application/omdoc+xml",onepkg:"application/onenote",onetmp:"application/onenote",onetoc:"application/onenote",onetoc2:"application/onenote",opf:"application/oebps-package+xml",opus:"audio/ogg",otf:"font/otf",owl:"application/rdf+xml",oxps:"application/oxps",p10:"application/pkcs10",p7c:"application/pkcs7-mime",p7m:"application/pkcs7-mime",p7s:"application/pkcs7-signature",p8:"application/pkcs8",pdf:"application/pdf",pfr:"application/font-tdpfr",pgp:"application/pgp-encrypted",pkg:"application/octet-stream",pki:"application/pkixcmp",pkipath:"application/pkix-pkipath",pls:"application/pls+xml",png:"image/png",prc:"model/prc",prf:"application/pics-rules",provx:"application/provenance+xml",ps:"application/postscript",pskcxml:"application/pskc+xml",pti:"image/prs.pti",qt:"video/quicktime",raml:"application/raml+yaml",rapd:"application/route-apd+xml",rdf:"application/rdf+xml",relo:"application/p2p-overlay+xml",rif:"application/reginfo+xml",rl:"application/resource-lists+xml",rld:"application/resource-lists-diff+xml",rmi:"audio/midi",rnc:"application/relax-ng-compact-syntax",rng:"application/xml",roa:"application/rpki-roa",roff:"text/troff",rq:"application/sparql-query",rs:"application/rls-services+xml",rsat:"application/atsc-rsat+xml",rsd:"application/rsd+xml",rsheet:"application/urc-ressheet+xml",rss:"application/rss+xml",rtf:"text/rtf",rtx:"text/richtext",rusd:"application/route-usd+xml",s3m:"audio/s3m",sbml:"application/sbml+xml",scq:"application/scvp-cv-request",scs:"application/scvp-cv-response",sdp:"application/sdp",senmlx:"application/senml+xml",sensmlx:"application/sensml+xml",ser:"application/java-serialized-object",setpay:"application/set-payment-initiation",setreg:"application/set-registration-initiation",sgi:"image/sgi",sgm:"text/sgml",sgml:"text/sgml",shex:"text/shex",shf:"application/shf+xml",shtml:"text/html",sieve:"application/sieve",sig:"application/pgp-signature",sil:"audio/silk",silo:"model/mesh",siv:"application/sieve",slim:"text/slim",slm:"text/slim",sls:"application/route-s-tsid+xml",smi:"application/smil+xml",smil:"application/smil+xml",snd:"audio/basic",so:"application/octet-stream",spdx:"text/spdx",spp:"application/scvp-vp-response",spq:"application/scvp-vp-request",spx:"audio/ogg",sql:"application/sql",sru:"application/sru+xml",srx:"application/sparql-results+xml",ssdl:"application/ssdl+xml",ssml:"application/ssml+xml",stk:"application/hyperstudio",stl:"model/stl",stpx:"model/step+xml",stpxz:"model/step-xml+zip",stpz:"model/step+zip",styl:"text/stylus",stylus:"text/stylus",svg:"image/svg+xml",svgz:"image/svg+xml",swidtag:"application/swid+xml",t:"text/troff",t38:"image/t38",td:"application/urc-targetdesc+xml",tei:"application/tei+xml",teicorpus:"application/tei+xml",text:"text/plain",tfi:"application/thraud+xml",tfx:"image/tiff-fx",tif:"image/tiff",tiff:"image/tiff",toml:"application/toml",tr:"text/troff",trig:"application/trig",ts:"video/mp2t",tsd:"application/timestamped-data",tsv:"text/tab-separated-values",ttc:"font/collection",ttf:"font/ttf",ttl:"text/turtle",ttml:"application/ttml+xml",txt:"text/plain",u3d:"model/u3d",u8dsn:"message/global-delivery-status",u8hdr:"message/global-headers",u8mdn:"message/global-disposition-notification",u8msg:"message/global",ubj:"application/ubjson",uri:"text/uri-list",uris:"text/uri-list",urls:"text/uri-list",vcard:"text/vcard",vrml:"model/vrml",vtt:"text/vtt",vxml:"application/voicexml+xml",war:"application/java-archive",wasm:"application/wasm",wav:"audio/wav",weba:"audio/webm",webm:"video/webm",webmanifest:"application/manifest+json",webp:"image/webp",wgsl:"text/wgsl",wgt:"application/widget",wif:"application/watcherinfo+xml",wmf:"image/wmf",woff:"font/woff",woff2:"font/woff2",wrl:"model/vrml",wsdl:"application/wsdl+xml",wspolicy:"application/wspolicy+xml",x3d:"model/x3d+xml",x3db:"model/x3d+fastinfoset",x3dbz:"model/x3d+binary",x3dv:"model/x3d-vrml",x3dvz:"model/x3d+vrml",x3dz:"model/x3d+xml",xaml:"application/xaml+xml",xav:"application/xcap-att+xml",xca:"application/xcap-caps+xml",xcs:"application/calendar+xml",xdf:"application/xcap-diff+xml",xdssc:"application/dssc+xml",xel:"application/xcap-el+xml",xenc:"application/xenc+xml",xer:"application/patch-ops-error+xml",xfdf:"application/xfdf",xht:"application/xhtml+xml",xhtml:"application/xhtml+xml",xhvml:"application/xv+xml",xlf:"application/xliff+xml",xm:"audio/xm",xml:"text/xml",xns:"application/xcap-ns+xml",xop:"application/xop+xml",xpl:"application/xproc+xml",xsd:"application/xml",xsf:"application/prs.xsf+xml",xsl:"application/xml",xslt:"application/xml",xspf:"application/xspf+xml",xvm:"application/xv+xml",xvml:"application/xv+xml",yaml:"text/yaml",yang:"application/yang",yin:"application/yin+xml",yml:"text/yaml",zip:"application/zip"};function vt(e){let t=(""+e).trim().toLowerCase(),a=t.lastIndexOf(".");return ht[~a?t.substring(++a):t]}function wt(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function ne(e){return ke.test(e)||!e.startsWith("/")?e:wt(T.value.base,e)}function yt(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t=t.replace(/\/$/,"/index"),k){const a="/shelley/";t=ie(t.slice(a.length).replace(/\//g,"_")||"index")+".md";let i=__VP_HASH_MAP__[t.toLowerCase()];if(i||(t=t.endsWith("_index.md")?t.slice(0,-9)+".md":t.slice(0,-3)+"_index.md",i=__VP_HASH_MAP__[t.toLowerCase()]),!i)return null;t=`${a}assets/${t}.${i}.js`}else t=`./${ie(t.slice(1).replace(/\//g,"_"))}.md.js`;return t}let V=[];function zt(e){V.push(e),fe(()=>{V=V.filter(t=>t!==e)})}const bt=Symbol(),Ce="http://a.com",jt=()=>({path:"/",component:null,data:Ee});function Ht(e,t){const a=Ie(jt()),i={route:a,go:o};async function o(n=k?location.href:"/"){var r,c;n=Y(n),await((r=i.onBeforeRouteChange)==null?void 0:r.call(i,n))!==!1&&(se(n),await s(n),await((c=i.onAfterRouteChanged)==null?void 0:c.call(i,n)))}let l=null;async function s(n,r=0,c=!1){var d;if(await((d=i.onBeforePageLoad)==null?void 0:d.call(i,n))===!1)return;const p=new URL(n,Ce),m=l=p.pathname;try{let u=await e(m);if(!u)throw new Error(`Page not found: ${m}`);if(l===m){l=null;const{default:f,__pageData:w}=u;if(!f)throw new Error(`Invalid route component: ${f}`);a.path=k?m:ne(m),a.component=W(f),a.data=W(w),k&&G(()=>{let x=T.value.base+w.relativePath.replace(/(?:(^|\/)index)?\.md$/,"$1");if(!T.value.cleanUrls&&!x.endsWith("/")&&(x+=".html"),x!==p.pathname&&(p.pathname=x,n=x+p.search+p.hash,history.replaceState(null,"",n)),p.hash&&!r){let j=null;try{j=document.getElementById(decodeURIComponent(p.hash).slice(1))}catch(S){console.warn(S)}if(j){oe(j,p.hash);return}}window.scrollTo(0,r)})}}catch(u){if(!/fetch|Page not found/.test(u.message)&&!/^\/404(\.html|\/)?$/.test(n)&&console.error(u),!c)try{const f=await fetch(T.value.base+"hashmap.json");window.__VP_HASH_MAP__=await f.json(),await s(n,r,!0);return}catch{}l===m&&(l=null,a.path=k?m:ne(m),a.component=t?W(t):null,a.data=Ee)}}return k&&(window.addEventListener("click",n=>{if(n.target.closest("button"))return;const c=n.target.closest("a");if(c&&!c.closest(".vp-raw")&&(c instanceof SVGElement||!c.download)){const{target:p}=c,{href:m,origin:d,pathname:u,hash:f,search:w}=new URL(c.href instanceof SVGAnimatedString?c.href.animVal:c.href,c.baseURI),x=window.location,j=vt(u);!n.ctrlKey&&!n.shiftKey&&!n.altKey&&!n.metaKey&&!p&&d===x.origin&&(!j||j==="text/html")&&(n.preventDefault(),u===x.pathname&&w===x.search?(f!==x.hash&&(history.pushState(null,"",f),window.dispatchEvent(new Event("hashchange"))),f?oe(c,f,c.classList.contains("header-anchor")):(se(m),window.scrollTo(0,0))):o(m))}},{capture:!0}),window.addEventListener("popstate",async n=>{var r;await s(Y(location.href),n.state&&n.state.scrollPosition||0),(r=i.onAfterRouteChanged)==null||r.call(i,location.href)}),window.addEventListener("hashchange",n=>{n.preventDefault()})),i}function kt(){const e=ue(bt);if(!e)throw new Error("useRouter() is called without provider.");return e}function Le(){return kt().route}function oe(e,t,a=!1){let i=null;try{i=e.classList.contains("header-anchor")?e:document.getElementById(decodeURIComponent(t).slice(1))}catch(o){console.warn(o)}if(i){let o=function(){!a||Math.abs(c-window.scrollY)>window.innerHeight?window.scrollTo(0,c):window.scrollTo({left:0,top:c,behavior:"smooth"})},l=T.value.scrollOffset,s=0,n=24;if(typeof l=="object"&&"padding"in l&&(n=l.padding,l=l.selector),typeof l=="number")s=l;else if(typeof l=="string")s=le(l,n);else if(Array.isArray(l))for(const p of l){const m=le(p,n);if(m){s=m;break}}const r=parseInt(window.getComputedStyle(i).paddingTop,10),c=window.scrollY+i.getBoundingClientRect().top-s+r;requestAnimationFrame(o)}}function le(e,t){const a=document.querySelector(e);if(!a)return 0;const i=a.getBoundingClientRect().bottom;return i<0?0:i+t}function se(e){k&&e!==Y(location.href)&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e))}function Y(e){const t=new URL(e,Ce);return t.pathname=t.pathname.replace(/(^|\/)index(\.html)?$/,"$1"),T.value.cleanUrls?t.pathname=t.pathname.replace(/\.html$/,""):!t.pathname.endsWith("/")&&!t.pathname.endsWith(".html")&&(t.pathname+=".html"),t.pathname+t.search+t.hash}const B=()=>V.forEach(e=>e()),Nt=ge({name:"VitePressContent",props:{as:{type:[Object,String],default:"div"}},setup(e){const t=Le(),{site:a}=xt();return()=>Q(e.as,a.value.contentProps??{style:{position:"relative"}},[t.component?Q(t.component,{onVnodeMounted:B,onVnodeUpdated:B,onVnodeUnmounted:B}):"404 Page Not Found"])}}),Dt=ge({setup(e,{slots:t}){const a=b(!1);return U(()=>{a.value=!0}),()=>a.value&&t.default?t.default():null}});function Vt(){k&&window.addEventListener("click",e=>{var a;const t=e.target;if(t.matches(".vp-code-group input")){const i=(a=t.parentElement)==null?void 0:a.parentElement;if(!i)return;const o=Array.from(i.querySelectorAll("input")).indexOf(t);if(o<0)return;const l=i.querySelector(".blocks");if(!l)return;const s=Array.from(l.children).find(c=>c.classList.contains("active"));if(!s)return;const n=l.children[o];if(!n||s===n)return;s.classList.remove("active"),n.classList.add("active");const r=i==null?void 0:i.querySelector(`label[for="${t.id}"]`);r==null||r.scrollIntoView({block:"nearest"})}})}function Ut(){if(k){const e=new WeakMap;window.addEventListener("click",t=>{var i;const a=t.target;if(a.matches('div[class*="language-"] > button.copy')){const o=a.parentElement,l=(i=a.nextElementSibling)==null?void 0:i.nextElementSibling;if(!o||!l)return;const s=/language-(shellscript|shell|bash|sh|zsh)/.test(o.className),n=[".vp-copy-ignore",".diff.remove"],r=l.cloneNode(!0);r.querySelectorAll(n.join(",")).forEach(p=>p.remove());let c=r.textContent||"";s&&(c=c.replace(/^ *(\$|>) /gm,"").trim()),St(c).then(()=>{a.classList.add("copied"),clearTimeout(e.get(a));const p=setTimeout(()=>{a.classList.remove("copied"),a.blur(),e.delete(a)},2e3);e.set(a,p)})}})}}async function St(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),a=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const i=document.getSelection(),o=i?i.rangeCount>0&&i.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),o&&(i.removeAllRanges(),i.addRange(o)),a&&a.focus()}}function Wt(e,t){let a=[],i=!0;const o=l=>{if(i){i=!1;return}const s=l.map(re);a.forEach((n,r)=>{const c=s.findIndex(p=>p==null?void 0:p.isEqualNode(n??null));c!==-1?delete s[c]:(n==null||n.remove(),delete a[r])}),s.forEach(n=>n&&document.head.appendChild(n)),a=[...a,...s].filter(Boolean)};me(()=>{const l=e.data,s=t.value,n=l&&l.description,r=l&&l.frontmatter.head||[],c=_e(s,l);c!==document.title&&(document.title=c);const p=n||s.description;let m=document.querySelector("meta[name=description]");m?m.getAttribute("content")!==p&&m.setAttribute("content",p):re(["meta",{name:"description",content:p}]),o(Ae(s.head,_t(r)))})}function re([e,t,a]){const i=document.createElement(e);for(const o in t)i.setAttribute(o,t[o]);return a&&(i.innerHTML=a),e==="script"&&!t.async&&(i.async=!1),i}function Et(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function _t(e){return e.filter(t=>!Et(t))}const X=new Set,Re=()=>document.createElement("link"),At=e=>{const t=Re();t.rel="prefetch",t.href=e,document.head.appendChild(t)},Ct=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let D;const Lt=k&&(D=Re())&&D.relList&&D.relList.supports&&D.relList.supports("prefetch")?At:Ct;function Ft(){if(!k||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let a=null;const i=()=>{a&&a.disconnect(),a=new IntersectionObserver(l=>{l.forEach(s=>{if(s.isIntersecting){const n=s.target;a.unobserve(n);const{pathname:r}=n;if(!X.has(r)){X.add(r);const c=yt(r);c&&Lt(c)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(l=>{const{hostname:s,pathname:n}=new URL(l.href instanceof SVGAnimatedString?l.href.animVal:l.href,l.baseURI),r=n.match(/\.\w+$/);r&&r[0]!==".html"||l.target!=="_blank"&&s===location.hostname&&(n!==location.pathname?a.observe(l):X.add(n))})})};U(i);const o=Le();q(()=>o.path,i),fe(()=>{a&&a.disconnect()})}export{Nt as C,ke as E,bt as R,Tt as _,rt as a,k as b,Je as c,Le as d,Pt as e,$t as f,It as g,qt as h,ct as i,Ft as j,Ut as k,vt as l,Vt as m,Wt as n,zt as o,Mt as p,gt as q,Dt as r,T as s,Ht as t,xt as u,yt as v,ne as w,Ot as x};
