import{R as y,W as m,K as v,G as T,aC as S,o as O,a6 as L,a7 as A,h as p,N as b,X as I,T as r,aj as j,ai as N,aM as B}from"./app.config.edc666ea.js";import{u as k}from"./ContentQuery.65134ff9.js";import{_ as e,u as C}from"./entry.a6d2d7ff.js";import{q as $,h as g,e as x,j as M}from"./query.73c56ad0.js";import{u as w}from"./cookie.7e074bf5.js";import{w as c,s as z,u as H}from"./utils.2a64907d.js";/* empty css                   */import"./ContentDoc.f1fbd606.js";import"./ContentList.55901b84.js";import"./ContentRenderer.252f4366.js";import"./ContentRendererMarkdown.8c36991f.js";import"./ContentSlot.fc921251.js";import"./DocumentDrivenEmpty.aee1c01a.js";import"./DocumentDrivenNotFound.dd137e29.js";import"./Markdown.6c140b91.js";import"./ProseCode.9af4e869.js";import{u as F}from"./composables.56e04689.js";import"./query.c3f7607a.js";import"./_commonjsHelpers.0ee3bad0.js";const q=async t=>{const{content:i}=y().public;typeof(t==null?void 0:t.params)!="function"&&(t=$(t));const n=t.params(),a=i.experimental.stripQueryParameters?c(`/navigation/${`${g(n)}.${i.integrity}`}/${x(n)}.json`):c(`/navigation/${g(n)}.${i.integrity}.json`);if(z())return(await e(()=>import("./client-db.75b46397.js"),["./client-db.75b46397.js","./app.config.edc666ea.js","./cookie.7e074bf5.js","./query.c3f7607a.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(u=>u.generateNavigation))(n);const o=await $fetch(a,{method:"GET",responseType:"json",params:i.experimental.stripQueryParameters?void 0:{_params:M(n),previewToken:w("previewToken").value}});if(typeof o=="string"&&o.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return o};const U=m({emits:{error(t){return!0}},setup(t,{slots:i,emit:n}){const a=v(null),o=T();return S(_=>{if(!o.isHydrating)return n("error",_),a.value=_,!1}),()=>{var _,u;return a.value?(_=i.error)==null?void 0:_.call(i,{error:a}):(u=i.default)==null?void 0:u.call(i)}}}),Q=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),W=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:i,attrs:n}){const a=v(!1);return O(()=>{a.value=!0}),o=>{var l;if(a.value)return(l=i.default)==null?void 0:l.call(i);const _=i.fallback||i.placeholder;if(_)return _();const u=o.fallback||o.placeholder||"",d=o.fallbackTag||o.placeholderTag||"span";return L(d,n,u)}}}),E=new WeakMap;function G(t){if(E.has(t))return E.get(t);const i={...t};return i.render?i.render=(n,...a)=>{if(n.mounted$){const o=t.render(n,...a);return o.children===null||typeof o.children=="string"?A(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):p(o)}else return p("div",n.$attrs??n._.attrs)}:i.template&&(i.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),i.setup=(n,a)=>{var _;const o=v(!1);return O(()=>{o.value=!0}),Promise.resolve(((_=t.setup)==null?void 0:_.call(t,n,a))||{}).then(u=>typeof u!="function"?{...u,mounted$:o}:(...d)=>{if(o.value){const l=u(...d);return l.children===null||typeof l.children=="string"?A(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):p(l)}else return p("div",a.attrs)})},E.set(t,i),i}const K=Object.freeze(Object.defineProperty({__proto__:null,createClientOnly:G,default:W},Symbol.toStringTag,{value:"Module"})),X=m({name:"DevOnly",setup(t,i){return()=>null}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),J=m({name:"ServerPlaceholder",render(){return L("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),tt=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const n=et({duration:t.duration,throttle:t.throttle}),a=T();return a.hook("page:start",n.start),a.hook("page:finish",n.finish),b(()=>n.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function et(t){const i=v(0),n=v(!1),a=I(()=>1e4/t.duration);let o=null,_=null;function u(){l(),i.value=0,t.throttle?_=setTimeout(()=>{n.value=!0,P()},t.throttle):(n.value=!0,P())}function d(){i.value=100,R()}function l(){clearInterval(o),clearTimeout(_),o=null,_=null}function D(V){i.value=Math.min(100,i.value+V)}function R(){l(),setTimeout(()=>{n.value=!1,setTimeout(()=>{i.value=0},400)},500)}function P(){o=setInterval(()=>{D(a.value)},100)}return{progress:i,isLoading:n,start:u,finish:d,clear:l}}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),it=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),h=(t,i)=>(n,a)=>(F(()=>t({...it(n),...a.attrs},a)),()=>{var o,_;return i?(_=(o=a.slots).default)==null?void 0:_.call(o):null}),f={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ot=m({name:"NoScript",inheritAttrs:!1,props:{...f,title:String,body:Boolean,renderPriority:[String,Number]},setup:h((t,{slots:i})=>{var o;const n={...t},a=(((o=i.default)==null?void 0:o.call(i))||[]).filter(({children:_})=>_).map(({children:_})=>_).join("");return a&&(n.children=a),{noscript:[n]}})}),nt=m({name:"Link",inheritAttrs:!1,props:{...f,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:h(t=>({link:[t]}))}),at=m({name:"Base",inheritAttrs:!1,props:{...f,href:String,target:String},setup:h(t=>({base:t}))}),_t=m({name:"Title",inheritAttrs:!1,setup:h((t,{slots:i})=>{var a,o,_;return{title:((_=(o=(a=i.default)==null?void 0:a.call(i))==null?void 0:o[0])==null?void 0:_.children)||null}})}),ut=m({name:"Meta",inheritAttrs:!1,props:{...f,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:h(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),lt=m({name:"Style",inheritAttrs:!1,props:{...f,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:h((t,{slots:i})=>{var o,_,u;const n={...t},a=(u=(_=(o=i.default)==null?void 0:o.call(i))==null?void 0:_[0])==null?void 0:u.children;return a&&(n.children=a),{style:[n]}})}),mt=m({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var n,a;return(a=(n=i.slots).default)==null?void 0:a.call(n)}}),dt=m({name:"Html",inheritAttrs:!1,props:{...f,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:h(t=>({htmlAttrs:t}),!0)}),pt=m({name:"Body",inheritAttrs:!1,props:{...f,renderPriority:[String,Number]},setup:h(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,Base:at,Body:pt,Head:mt,Html:dt,Link:nt,Meta:ut,NoScript:ot,Style:lt,Title:_t},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./aktualnosciCard.ebd47a00.js"),["./aktualnosciCard.ebd47a00.js","./aktualnosciCard.vue.136abdd5.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./emailForm.7b5fbc8a.js"),["./emailForm.7b5fbc8a.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./expandable.6e5b314b.js"),["./expandable.6e5b314b.js","./expandable.vue.b551f840.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./footer.c205cbea.js"),["./footer.c205cbea.js","./app.config.edc666ea.js","./emailForm.7b5fbc8a.js","./entry.a6d2d7ff.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./header.bf9a6c08.js"),["./header.bf9a6c08.js","./header.vue.d96fa8de.js","./navbar.vue.e6dfb7db.js","./app.config.edc666ea.js","./entry.a6d2d7ff.js","./entry.d826f134.css","./useParalax.56950b0d.js","./navbar.de065365.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./mediationCard.bf60cf45.js"),["./mediationCard.bf60cf45.js","./app.config.edc666ea.js","./entry.a6d2d7ff.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./mediationTypeIcon.010645dc.js"),["./mediationTypeIcon.010645dc.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./memberCard.e8fa1fca.js"),["./memberCard.e8fa1fca.js","./memberCard.vue.d5aa42f8.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./memberCarousel.289aa137.js"),["./memberCarousel.289aa137.js","./memberCarousel.vue.0074cc3f.js","./memberCard.vue.d5aa42f8.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./navbar.0e487e8b.js"),["./navbar.0e487e8b.js","./navbar.vue.e6dfb7db.js","./app.config.edc666ea.js","./entry.a6d2d7ff.js","./entry.d826f134.css","./navbar.de065365.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./postNavigation.75b4f2d3.js"),["./postNavigation.75b4f2d3.js","./app.config.edc666ea.js","./query.73c56ad0.js","./entry.a6d2d7ff.js","./entry.d826f134.css","./cookie.7e074bf5.js","./query.c3f7607a.js","./utils.2a64907d.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./quote.46db0f7a.js"),["./quote.46db0f7a.js","./quote.vue.25b840af.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./reviewCard.8d4b63b4.js"),["./reviewCard.8d4b63b4.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./useParalax.56950b0d.js"),["./useParalax.56950b0d.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.f1fbd606.js"),["./ContentDoc.f1fbd606.js","./app.config.edc666ea.js","./composables.56e04689.js","./ContentRenderer.252f4366.js","./ContentRendererMarkdown.8c36991f.js","./_commonjsHelpers.0ee3bad0.js","./ContentQuery.65134ff9.js","./entry.a6d2d7ff.js","./entry.d826f134.css","./query.73c56ad0.js","./cookie.7e074bf5.js","./query.c3f7607a.js","./utils.2a64907d.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.55901b84.js"),["./ContentList.55901b84.js","./ContentQuery.65134ff9.js","./app.config.edc666ea.js","./entry.a6d2d7ff.js","./entry.d826f134.css","./query.73c56ad0.js","./cookie.7e074bf5.js","./query.c3f7607a.js","./utils.2a64907d.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>ht),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.65134ff9.js").then(t=>t.C),["./ContentQuery.65134ff9.js","./app.config.edc666ea.js","./entry.a6d2d7ff.js","./entry.d826f134.css","./query.73c56ad0.js","./cookie.7e074bf5.js","./query.c3f7607a.js","./utils.2a64907d.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.252f4366.js"),["./ContentRenderer.252f4366.js","./ContentRendererMarkdown.8c36991f.js","./app.config.edc666ea.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.8c36991f.js"),["./ContentRendererMarkdown.8c36991f.js","./app.config.edc666ea.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.fc921251.js"),["./ContentSlot.fc921251.js","./utils.2a64907d.js","./app.config.edc666ea.js","./cookie.7e074bf5.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.aee1c01a.js"),["./DocumentDrivenEmpty.aee1c01a.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.dd137e29.js"),["./DocumentDrivenNotFound.dd137e29.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.6c140b91.js"),["./Markdown.6c140b91.js","./ContentSlot.fc921251.js","./utils.2a64907d.js","./app.config.edc666ea.js","./cookie.7e074bf5.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.540eeeb0.js"),["./ProseA.540eeeb0.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.7a7b895b.js"),["./ProseBlockquote.7a7b895b.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.9af4e869.js"),["./ProseCode.9af4e869.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.c0e0ffb3.js"),["./ProseCodeInline.c0e0ffb3.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.e3cd7931.js"),["./ProseEm.e3cd7931.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.eb6e4e0f.js"),["./ProseH1.eb6e4e0f.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.98e73bfd.js"),["./ProseH2.98e73bfd.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.0cbf98e4.js"),["./ProseH3.0cbf98e4.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.fc77707e.js"),["./ProseH4.fc77707e.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.04dbb9fa.js"),["./ProseH5.04dbb9fa.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.1001b25b.js"),["./ProseH6.1001b25b.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.8e7e2f35.js"),["./ProseHr.8e7e2f35.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.d64a63fe.js"),["./ProseImg.d64a63fe.js","./app.config.edc666ea.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.d8675c63.js"),["./ProseLi.d8675c63.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.30e73a92.js"),["./ProseOl.30e73a92.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.039df3bd.js"),["./ProseP.039df3bd.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.3345edb4.js"),["./ProseStrong.3345edb4.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.2da55b60.js"),["./ProseTable.2da55b60.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.b3ed6680.js"),["./ProseTbody.b3ed6680.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.926513dc.js"),["./ProseTd.926513dc.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.eae2a2fe.js"),["./ProseTh.eae2a2fe.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.562eb8c9.js"),["./ProseThead.562eb8c9.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.0b9e2243.js"),["./ProseTr.0b9e2243.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.783fcfc5.js"),["./ProseUl.783fcfc5.js","./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.13e7be60.js"),["./welcome.13e7be60.js","./composables.56e04689.js","./app.config.edc666ea.js","./entry.a6d2d7ff.js","./entry.d826f134.css","./ContentQuery.65134ff9.js","./query.73c56ad0.js","./cookie.7e074bf5.js","./query.c3f7607a.js","./utils.2a64907d.js","./ContentDoc.f1fbd606.js","./ContentRenderer.252f4366.js","./ContentRendererMarkdown.8c36991f.js","./_commonjsHelpers.0ee3bad0.js","./ContentList.55901b84.js","./ContentSlot.fc921251.js","./DocumentDrivenEmpty.aee1c01a.js","./DocumentDrivenNotFound.dd137e29.js","./Markdown.6c140b91.js","./ProseCode.9af4e869.js","./ProseCode.e63e49c6.css","./navbar.de065365.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.l),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./app.config.edc666ea.js").then(t=>t.aR),[],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.AAlert));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.AAvatar));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ABadge));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ABaseInput));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ABtn));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ACard));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ACheckbox));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.AChip));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ADataTable));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ADialog));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ADrawer));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.AInput));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.AList));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.AListItem));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.AMenu));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ARadio));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ARating));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ASelect));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ASwitch));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ATable));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ATextarea));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.d),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.ATypography));r(()=>e(()=>import("./entry.a6d2d7ff.js").then(t=>t.p),["./entry.a6d2d7ff.js","./app.config.edc666ea.js","./entry.d826f134.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const st=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=j(t),n=I(()=>{var o;return typeof((o=i.value)==null?void 0:o.params)=="function"?i.value.params():i.value});if(!n.value&&C("dd-navigation").value){const{navigation:o}=H();return{navigation:o}}const{data:a}=await k(`content-navigation-${g(n.value)}`,()=>q(n.value));return{navigation:a}},render(t){const i=N(),{navigation:n}=t,a=u=>p(B,{to:u._path},()=>u.title),o=(u,d)=>p("ul",d?{"data-level":d}:null,u.map(l=>l.children?p("li",null,[a(l),o(l.children,d+1)]):p("li",null,a(l)))),_=u=>o(u,0);return i!=null&&i.default?i.default({navigation:n,...this.$attrs}):_(n)}}),ht=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));export{st as default};
