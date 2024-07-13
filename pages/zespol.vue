<template>
  <div class="mt-8 flex">
    <div class="flex flex-col grow items-center">
      <!-- <Quote className="w-full lg:w-fit mb-10">
                Mediacje są naszą pasja i wierzymy, że każdy spór można rozwiązać na drodze
                porozumienia, współpracy w poszanowaniu praw drugiej strony
            </Quote> -->

      <span class="font-extrabold text-primary text-5xl mb-8">O mnie</span>
      <MemberCarousel :members="people"></MemberCarousel>
    </div>
    <div class="hidden">nawigacja</div>
  </div>
</template>

<script setup lang="ts">
// import { member } from "~~/components/member/member";
// let base = process.env.NUXT_APP_BASE_URL || "/"
let base = useRuntimeConfig().public.baseUrl;
console.log("base", base);

const people: member[] = [
  {
    name: "Agnieszka",
    surname: "Danieluk",
    photoSrc: base + "agnieszka2.jpg",
    quote: ` 
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
    `,
    desc: "Mediator, coach kryzysowy oraz doradca biznesowy.",
  },
  // {
  //     name: "Iwona",
  //     surname: "",
  //     photoSrc: base + "iwona01.jpg",
  //     quote: `cytat iwony`,
  //     desc: "Coś o sobie"
  // },
];
</script>
