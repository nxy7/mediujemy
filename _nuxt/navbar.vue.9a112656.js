import{W as k,K as d,a5 as s,a6 as o,a7 as l,ac as i,ad as c,F as u,al as x,ap as p,ao as m,a8 as _,P as a,ag as g,a9 as v,an as w,aM as y}from"./app.config.edc666ea.js";import{b as C}from"./entry.6d60b0db.js";const F=""+globalThis.__publicAssetsURL("logo1.png"),V={class:"hidden lg:flex w-full px-4 space-x-12"},z=l("img",{src:F,class:"self-start h-12"},null,-1),N={class:"flex grow justify-end items-center space-x-6 pr-8"},j={class:"w-full px-4 flex justify-end lg:hidden"},$=k({__name:"navbar",setup(B){C(b=>({"6e290180":a(h)}));const t=d(!1),f=[{href:"/",text:"Strona Główna"},{href:"zespol",text:"Nasz zespół"},{href:"mediacje",text:"O mediacji"},{href:"cennik",text:"Cennik"},{href:"aktualnosci",text:"Aktualności"},{href:"kontakt",text:"Kontakt"}],h=d("#FFFFF1");return(b,n)=>{const r=y;return s(),o("div",{class:_(`sticky w-full top-0 flex justify-center items-center z-40 md:shadow-lg text-black min-h-20 backdrop-blur-sm ${a(t)?"":" !bg-white"}`)},[l("div",V,[i(r,{href:"/",class:"self-start"},{default:c(()=>[z]),_:1}),l("div",N,[(s(),o(u,null,x(f,e=>i(r,{href:e.href,class:"px-4 py-3 duration-200 text-md font-semibold hover:text-black"},{default:c(()=>[p(m(e.text),1)]),_:2},1032,["href"])),64))])]),l("div",j,[l("button",{class:_(a(t)?"i-mdi-close":"i-mdi-menu"),onClick:n[0]||(n[0]=e=>t.value=!a(t))},null,2),(s(),g(w,{to:"body"},[a(t)?(s(),o("div",{key:0,onClick:n[1]||(n[1]=e=>t.value=!1),class:"fixed top-0 left-0 z-30 pt-20 flex flex-col h-screen w-screen bg-slate-100"},[(s(),o(u,null,x(f,e=>i(r,{href:e.href,class:"w-full text-center text-3xl font-semibold duration-75 hover:bg-slate-200 py-8"},{default:c(()=>[p(m(e.text),1)]),_:2},1032,["href"])),64))])):v("",!0)]))])],2)}}});export{$ as _};