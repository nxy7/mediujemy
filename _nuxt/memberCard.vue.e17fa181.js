import{_ as t}from"./quote.vue.5361e15e.js";import{W as c,a5 as r,a6 as l,a7 as o,a8 as i,ao as a,ac as n,ad as d,ap as m}from"./app.config.edc666ea.js";const f={class:"flex flex-col sm:flex-row group rounded-md overflow-hidden duration-200 hover:shadow-lg"},h=["src"],u={class:"flex flex-col px-3 py-2 w-100"},_={class:"font-semibold"},p=o("div",{class:"grow"},"opisane doświadczenie i kwalifikacje?",-1),g=c({__name:"memberCard",props:{member:null,photoSide:{type:Boolean}},setup(e){return(w,x)=>{const s=t;return r(),l("div",f,[o("div",{class:i(`overflow-hidden ${e.photoSide&&"order-2"}`)},[o("img",{src:e.member.photoSrc,alt:"photo",class:"w-full sm:w-70 duration-200 group-hover:scale-105"},null,8,h)],2),o("div",u,[o("div",_,a(e.member.name)+" "+a(e.member.surname),1),p,n(s,{class:"italic text-center"},{default:d(()=>[m(a(e.member.quote),1)]),_:1})])])}}});export{g as _};
