import{N as R,R as m,G as v,A as T,aa as V,o as y,ao as A,ap as P,h as p,J as b,T as S,O as i,aj as j,ag as N,aq as $}from"./app.config.87378446.js";import{u as k}from"./ContentQuery.63930d82.js";import{_ as r,u as B}from"./entry.88b7267f.js";import{q as C,h as g,e as x,j as M}from"./query.c6d43046.js";import{u as w}from"./cookie.537dc52f.js";import{w as O,s as z,u as H}from"./utils.81fd91ad.js";/* empty css                   */import"./ContentDoc.6c02fb98.js";import"./ContentList.3c00611e.js";import"./ContentRenderer.829ad72e.js";import"./ContentRendererMarkdown.18796abe.js";import"./ContentSlot.34f34318.js";import"./DocumentDrivenEmpty.f1fa2d0e.js";import"./DocumentDrivenNotFound.9d797cf4.js";import"./Markdown.fceb4a0c.js";import"./ProseCode.815df751.js";import{u as q}from"./composables.bf3d5a20.js";import"./query.c3f7607a.js";import"./_commonjsHelpers.0ee3bad0.js";const F=async t=>{const{content:e}=R().public;typeof(t==null?void 0:t.params)!="function"&&(t=C(t));const n=t.params(),a=e.experimental.stripQueryParameters?O(`/navigation/${`${g(n)}.${e.integrity}`}/${x(n)}.json`):O(`/navigation/${g(n)}.${e.integrity}.json`);if(z())return(await r(()=>import("./client-db.1ed24da9.js"),["./client-db.1ed24da9.js","./app.config.87378446.js","./cookie.537dc52f.js","./query.c3f7607a.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(_=>_.generateNavigation))(n);const o=await $fetch(a,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:M(n),previewToken:w("previewToken").value}});if(typeof o=="string"&&o.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return o};const U=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const a=v(null),o=T();return V(u=>{if(!o.isHydrating)return n("error",u),a.value=u,!1}),()=>{var u,_;return a.value?(u=e.error)==null?void 0:u.call(e,{error:a}):(_=e.default)==null?void 0:_.call(e)}}}),Q=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),G=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const a=v(!1);return y(()=>{a.value=!0}),o=>{var l;if(a.value)return(l=e.default)==null?void 0:l.call(e);const u=e.fallback||e.placeholder;if(u)return u();const _=o.fallback||o.placeholder||"",d=o.fallbackTag||o.placeholderTag||"span";return A(d,n,_)}}}),E=new WeakMap;function W(t){if(E.has(t))return E.get(t);const e={...t};return e.render?e.render=(n,...a)=>{if(n.mounted$){const o=t.render(n,...a);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):p(o)}else return p("div",n.$attrs??n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,a)=>{var u;const o=v(!1);return y(()=>{o.value=!0}),Promise.resolve(((u=t.setup)==null?void 0:u.call(t,n,a))||{}).then(_=>typeof _!="function"?{..._,mounted$:o}:(...d)=>{if(o.value){const l=_(...d);return l.children===null||typeof l.children=="string"?P(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):p(l)}else return p("div",a.attrs)})},E.set(t,e),e}const J=Object.freeze(Object.defineProperty({__proto__:null,createClientOnly:W,default:G},Symbol.toStringTag,{value:"Module"})),Y=m({name:"DevOnly",setup(t,e){return()=>null}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),X=m({name:"ServerPlaceholder",render(){return A("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),tt=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=et({duration:t.duration,throttle:t.throttle}),a=T();return a.hook("page:start",n.start),a.hook("page:finish",n.finish),b(()=>n.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function et(t){const e=v(0),n=v(!1),a=S(()=>1e4/t.duration);let o=null,u=null;function _(){l(),e.value=0,t.throttle?u=setTimeout(()=>{n.value=!0,c()},t.throttle):(n.value=!0,c())}function d(){e.value=100,I()}function l(){clearInterval(o),clearTimeout(u),o=null,u=null}function L(D){e.value=Math.min(100,e.value+D)}function I(){l(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function c(){o=setInterval(()=>{L(a.value)},100)}return{progress:e,isLoading:n,start:_,finish:d,clear:l}}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),it=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,a)=>(q(()=>t({...it(n),...a.attrs},a)),()=>{var o,u;return e?(u=(o=a.slots).default)==null?void 0:u.call(o):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ot=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var o;const n={...t},a=(((o=e.default)==null?void 0:o.call(e))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return a&&(n.children=a),{noscript:[n]}})}),nt=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),at=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),ut=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var a,o,u;return{title:((u=(o=(a=e.default)==null?void 0:a.call(e))==null?void 0:o[0])==null?void 0:u.children)||null}})}),_t=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),lt=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var o,u,_;const n={...t},a=(_=(u=(o=e.default)==null?void 0:o.call(e))==null?void 0:u[0])==null?void 0:_.children;return a&&(n.children=a),{style:[n]}})}),mt=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,a;return(a=(n=e.slots).default)==null?void 0:a.call(n)}}),dt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),pt=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,Base:at,Body:pt,Head:mt,Html:dt,Link:nt,Meta:_t,NoScript:ot,Style:lt,Title:ut},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./aktualnosciCard.cc6747fb.js"),["./aktualnosciCard.cc6747fb.js","./aktualnosciCard.vue.ab374d23.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./emailForm.364943c0.js"),["./emailForm.364943c0.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./expandable.a2114a99.js"),["./expandable.a2114a99.js","./expandable.vue.670a64c3.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./footer.90502e82.js"),["./footer.90502e82.js","./app.config.87378446.js","./emailForm.364943c0.js","./entry.88b7267f.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./header.007c6073.js"),["./header.007c6073.js","./header.vue.9d5d06e8.js","./navbar.vue.5dd67c06.js","./app.config.87378446.js","./entry.88b7267f.js","./entry.a30fff88.css","./useParalax.d734a03d.js","./navbar.de065365.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./mediationCard.629445d2.js"),["./mediationCard.629445d2.js","./app.config.87378446.js","./entry.88b7267f.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./mediationTypeIcon.0b04947c.js"),["./mediationTypeIcon.0b04947c.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./memberCard.15341a5f.js"),["./memberCard.15341a5f.js","./memberCard.vue.91f48f1c.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./memberCarousel.d3b62147.js"),["./memberCarousel.d3b62147.js","./memberCarousel.vue.7a2a5fbb.js","./memberCard.vue.91f48f1c.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./navbar.624cbb5e.js"),["./navbar.624cbb5e.js","./navbar.vue.5dd67c06.js","./app.config.87378446.js","./entry.88b7267f.js","./entry.a30fff88.css","./navbar.de065365.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./postNavigation.16206c4b.js"),["./postNavigation.16206c4b.js","./app.config.87378446.js","./query.c6d43046.js","./entry.88b7267f.js","./entry.a30fff88.css","./cookie.537dc52f.js","./query.c3f7607a.js","./utils.81fd91ad.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./quote.3c373f2e.js"),["./quote.3c373f2e.js","./quote.vue.c293976c.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./reviewCard.7612c032.js"),["./reviewCard.7612c032.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./useParalax.d734a03d.js"),["./useParalax.d734a03d.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./UnoIcon.942afafe.js"),["./UnoIcon.942afafe.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.6c02fb98.js"),["./ContentDoc.6c02fb98.js","./app.config.87378446.js","./composables.bf3d5a20.js","./ContentRenderer.829ad72e.js","./ContentRendererMarkdown.18796abe.js","./_commonjsHelpers.0ee3bad0.js","./ContentQuery.63930d82.js","./entry.88b7267f.js","./entry.a30fff88.css","./query.c6d43046.js","./cookie.537dc52f.js","./query.c3f7607a.js","./utils.81fd91ad.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.3c00611e.js"),["./ContentList.3c00611e.js","./ContentQuery.63930d82.js","./app.config.87378446.js","./entry.88b7267f.js","./entry.a30fff88.css","./query.c6d43046.js","./cookie.537dc52f.js","./query.c3f7607a.js","./utils.81fd91ad.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>ft),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.63930d82.js").then(t=>t.C),["./ContentQuery.63930d82.js","./app.config.87378446.js","./entry.88b7267f.js","./entry.a30fff88.css","./query.c6d43046.js","./cookie.537dc52f.js","./query.c3f7607a.js","./utils.81fd91ad.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.829ad72e.js"),["./ContentRenderer.829ad72e.js","./ContentRendererMarkdown.18796abe.js","./app.config.87378446.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.18796abe.js"),["./ContentRendererMarkdown.18796abe.js","./app.config.87378446.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.34f34318.js"),["./ContentSlot.34f34318.js","./utils.81fd91ad.js","./app.config.87378446.js","./cookie.537dc52f.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.f1fa2d0e.js"),["./DocumentDrivenEmpty.f1fa2d0e.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.9d797cf4.js"),["./DocumentDrivenNotFound.9d797cf4.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.fceb4a0c.js"),["./Markdown.fceb4a0c.js","./ContentSlot.34f34318.js","./utils.81fd91ad.js","./app.config.87378446.js","./cookie.537dc52f.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.f6071c95.js"),["./ProseA.f6071c95.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.2f936143.js"),["./ProseBlockquote.2f936143.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.815df751.js"),["./ProseCode.815df751.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.bbe64700.js"),["./ProseCodeInline.bbe64700.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.ce59f776.js"),["./ProseEm.ce59f776.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.021a0d3a.js"),["./ProseH1.021a0d3a.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.a6c427f9.js"),["./ProseH2.a6c427f9.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.55e753f4.js"),["./ProseH3.55e753f4.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.747c4d16.js"),["./ProseH4.747c4d16.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.4f4d98d4.js"),["./ProseH5.4f4d98d4.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.e899dd46.js"),["./ProseH6.e899dd46.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.a973a510.js"),["./ProseHr.a973a510.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.d7376c59.js"),["./ProseImg.d7376c59.js","./app.config.87378446.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.d65cf2f9.js"),["./ProseLi.d65cf2f9.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.3ab5e179.js"),["./ProseOl.3ab5e179.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.ec8eb638.js"),["./ProseP.ec8eb638.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.0d53c5f7.js"),["./ProseStrong.0d53c5f7.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.4b34f1b7.js"),["./ProseTable.4b34f1b7.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.900c9fd4.js"),["./ProseTbody.900c9fd4.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.50562da2.js"),["./ProseTd.50562da2.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.29c7c09b.js"),["./ProseTh.29c7c09b.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.7e61bafd.js"),["./ProseThead.7e61bafd.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.a392e953.js"),["./ProseTr.a392e953.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.6a839533.js"),["./ProseUl.6a839533.js","./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.910add5e.js"),["./welcome.910add5e.js","./composables.bf3d5a20.js","./app.config.87378446.js","./entry.88b7267f.js","./entry.a30fff88.css","./ContentQuery.63930d82.js","./query.c6d43046.js","./cookie.537dc52f.js","./query.c3f7607a.js","./utils.81fd91ad.js","./ContentDoc.6c02fb98.js","./ContentRenderer.829ad72e.js","./ContentRendererMarkdown.18796abe.js","./_commonjsHelpers.0ee3bad0.js","./ContentList.3c00611e.js","./ContentSlot.34f34318.js","./DocumentDrivenEmpty.f1fa2d0e.js","./DocumentDrivenNotFound.9d797cf4.js","./Markdown.fceb4a0c.js","./ProseCode.815df751.js","./ProseCode.e63e49c6.css","./navbar.de065365.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.88b7267f.js").then(t=>t.l),["./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./app.config.87378446.js").then(t=>t.aD),[],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.88b7267f.js").then(t=>t.p),["./entry.88b7267f.js","./app.config.87378446.js","./entry.a30fff88.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const st=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=j(t),n=S(()=>{var o;return typeof((o=e.value)==null?void 0:o.params)=="function"?e.value.params():e.value});if(!n.value&&B("dd-navigation").value){const{navigation:o}=H();return{navigation:o}}const{data:a}=await k(`content-navigation-${g(n.value)}`,()=>F(n.value));return{navigation:a}},render(t){const e=N(),{navigation:n}=t,a=_=>p($,{to:_._path},()=>_.title),o=(_,d)=>p("ul",d?{"data-level":d}:null,_.map(l=>l.children?p("li",null,[a(l),o(l.children,d+1)]):p("li",null,a(l)))),u=_=>o(_,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):u(n)}}),ft=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));export{st as default};
