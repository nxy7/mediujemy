import{W as p,Z as h,a3 as u,K as f,o as m,M as g,a5 as v,a6 as x,a7 as l,ao as _,aa as y,a8 as i,P as c,ab as H}from"./app.config.edc666ea.js";const b=["id"],k={class:"text-center text-xl font-semibold"},B={class:"p-2"},C=p({__name:"expandable",props:{title:null,id:null,open:{type:Boolean}},setup(t){const n=t;let e=h({open:n.open,contentHeight:0});const r=u();function d(){e.open=!e.open,e.open&&r.push({hash:`#${n.id}`})}const s=f(null);return m(()=>{var o,a;console.log("elo"),e.contentHeight=((o=s.value)==null?void 0:o.scrollHeight)||0,console.log((a=s.value)==null?void 0:a.scrollHeight)}),g(()=>n.open,o=>{e.open=o}),(o,a)=>(v(),x("div",{onClick:d,class:i("flex flex-col -scroll-mt-30 overflow-hidden p-6 rounded-md group hover:bg-slate-100"+(c(e).open,"")),id:t.id},[l("div",k,_(t.title),1),l("div",{class:i("overflow-hidden duration-300 "+(c(e).open?"":"!max-h-0")),ref_key:"content",ref:s,style:H(`max-height: ${c(e).contentHeight||1e3}px`)},[l("div",B,[y(o.$slots,"default")])],6)],10,b))}});export{C as _};