import{_ as t}from"./memberCarousel.vue.d8f4113b.js";import{W as i,R as n,a5 as r,a6 as c,a7 as o,ac as m}from"./app.config.edc666ea.js";import"./memberCard.vue.8de418e8.js";import"./quote.vue.5361e15e.js";const p={class:"mt-8 flex"},d={class:"flex flex-col grow items-center"},l=o("span",{class:"font-extrabold text-primary text-5xl mb-8"},"Nasz Zespół",-1),_=o("div",{class:"hidden"},"nawigacja",-1),x=i({__name:"zespol",setup(u){let e=n().public.baseUrl;console.log("base",e);const a=[{name:"Agnieszka",surname:"Danieluk",photoSrc:e+"agnieszka2.jpg",quote:` 
                        Wierzę w ludzi, i uważam, że sami najlepiej wiedzą czego potrzebują. Jako mediator
                        towarzyszę
                        im
                        w drodze do budowania porozumienia poprzez słuchanie i wspieranie w tej drodze
    `,desc:""},{name:"Iwona",surname:"",photoSrc:e+"iwona01.jpg",quote:"cytat iwony",desc:"Coś o sobie"}];return(z,w)=>{const s=t;return r(),c("div",p,[o("div",d,[l,m(s,{members:a})]),_])}}});export{x as default};
