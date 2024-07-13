import{j as r,o as a,c as s,a as o,l as u,n as p,t as n,b as z,w,d as _,F as h,r as y,g as k,k as b}from"./DDV8MkC4.js";const j=o("div",{class:"absolute i-mdi-format-quote-open bottom-0 left-0 h-7 w-7"},null,-1),f={class:"px-3"},g=o("div",{class:"absolute i-mdi-format-quote-close right-0 top-0 h-7 w-7"},null,-1),v=r({__name:"quote",props:{className:{}},setup(t){return(e,i)=>(a(),s("div",{class:p("relative bg-white w-fit rounded-sm p-6 text-center "+e.className)},[j,o("span",f,[u(e.$slots,"default")]),g],2))}}),x={class:"flex flex-col sm:flex-row group overflow-hidden duration-200 shadow-sm hover:shadow-lg hover:rounded-md"},$=["src"],S={class:"flex flex-col justify-center px-3 py-2 w-[60rem]"},C={class:"font-semibold"},M={class:""},B=r({__name:"memberCard",props:{member:{},photoSide:{type:Boolean}},setup(t){return(e,i)=>{const c=v;return a(),s("div",x,[o("div",{class:p(`overflow-hidden h-full ${e.photoSide&&"order-2"}`)},[o("img",{src:e.member.photoSrc,alt:"photo",class:"min-h-full sm:w-[30rem] duration-200 group-hover:scale-105"},null,8,$)],2),o("div",S,[o("div",C,n(e.member.name)+" "+n(e.member.surname),1),o("div",M,n(e.member.desc),1),z(c,{class:"italic text-center"},{default:w(()=>[_(n(e.member.quote),1)]),_:1})])])}}}),q={class:"flex gap-9 flex-wrap justify-center"},N=r({__name:"memberCarousel",props:{members:{}},setup(t){const e=t;return(i,c)=>{const d=B;return a(),s("div",q,[(a(!0),s(h,null,y(e.members,(m,l)=>(a(),k(d,{key:l,member:m,"photo-side":l%2==1},null,8,["member","photo-side"]))),128))])}}}),R={class:"mt-8 flex"},T={class:"flex flex-col grow items-center"},O=o("span",{class:"font-extrabold text-primary text-5xl mb-8"},"O mnie",-1),W=o("div",{class:"hidden"},"nawigacja",-1),D=r({__name:"zespol",setup(t){let e=b().public.baseUrl;console.log("base",e);const i=[{name:"Agnieszka",surname:"Danieluk",photoSrc:e+"agnieszka2.jpg",quote:` 
                        Jestem mediatorem, coachem kryzysowym i trenerem biznesu.

Moje motto to:

Wierzę w ludzi, i uważam, że sami najlepiej wiedzą czego potrzebują. Jako mediator towarzyszę im w drodze do budowania porozumienia poprzez słuchanie i wspieranie w tej drodze

 

Od ponad dwudziestu lat jako praktyk biznesu piastuję stanowiska kierownicze i menadżerskie w obszarach związanych ze sprzedażą, zakupami i operacją.

W związku z tym, że na co dzień prowadzę negocjacje, rozwiązuję spory i szukam porozumienia w trudnych sytuacjach zarówno wewnątrz organizacji jak i z klientami zewnętrznymi jest mi łatwiej pomagać stronom szukającym porozumienia.

W swojej pracy wykorzystuję elementy TSR (Terapia Skoncentrowana na Rozwiązaniach).

 

Praca z wiedzą jaką nabyłam na kursie TSR jest również wykorzystywana prze mnie podczas prowadzonych mediacji. Wnosi dużo nowych dobrych doświadczeń dla uczestników spotkań i pozwala koncentrować się na rozwiązaniach a nie tylko na problemach z przeszłości.

 

Moją ogromną pasją jest rozwój osobisty, wierzę, że każdy z nas ma potencjał, który czasami drzemie w nas ukryty i potrzebuje małego wsparcia aby ujrzeć światło dzienne.

Stąd prowadzone przeze mnie coachingi i warsztaty uwzględniają  tematykę związaną z wypaleniem zawodowym, radzeniem sobie ze stresem, wzmocnieniem poczucia własnej wartości, poprawa komunikacji i rozwiazywaniem konfliktów.

 

Od ponad 7 lat jestem również praktykiem mindfulness   – w 2019 r  ukończyłam podstawowy Trening Mindfulness Based Stress Reduction,
Obecnie pogłębiam swój warsztat w Polskim Instutucie Minfulness przygotowując się do kursu nauczycielskiego.
    `,desc:"Mediator, coach kryzysowy oraz doradca biznesowy."}];return(c,d)=>{const m=N;return a(),s("div",R,[o("div",T,[O,z(m,{members:i})]),W])}}});export{D as default};
