import{W as a,a5 as t,a6 as l,a7 as e,a8 as i,ao as s}from"./app.config.edc666ea.js";const r={class:"flex flex-col sm:flex-row group rounded-md overflow-hidden duration-200 shadow-sm hover:shadow-lg"},c=["src"],d={class:"flex flex-col px-3 py-2 w-140"},n={class:"font-semibold"},m=e("div",{class:"grow"},"opisane doświadczenie i kwalifikacje?",-1),h={class:"italic text-center"},_=a({__name:"memberCard",props:{member:null,photoSide:{type:Boolean}},setup(o){return(f,u)=>(t(),l("div",r,[e("div",{class:i(`overflow-hidden ${o.photoSide&&"order-2"}`)},[e("img",{src:o.member.photoSrc,alt:"photo",class:"w-full sm:w-70 duration-200 group-hover:scale-105"},null,8,c)],2),e("div",d,[e("div",n,s(o.member.name)+" "+s(o.member.surname),1),m,e("div",h,s(o.member.quote),1)])]))}});export{_};