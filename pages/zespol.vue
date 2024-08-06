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
import type { member } from '~/components/member/member';

// let base = process.env.NUXT_APP_BASE_URL || "/"
let base = useRuntimeConfig().public.baseUrl;
console.log("base", base);

const people: member[] = [
  {
    name: "Agnieszka",
    surname: "Danieluk",
    photoSrc: base + "agnieszka2.jpg",
    quote: [` 
Moje motto to:`,


      `<span class="italic">
      "Wierzę w ludzi, i uważam, że sami najlepiej wiedzą, czego potrzebują"
</span>.`,
``,
``,
``,
``,
``,
``,
``,
``,
``,
``,

`Jako mediator towarzyszę im w drodze do budowania porozumienia poprzez słuchanie i wspieranie w tej drodze. Od ponad dwudziestu lat jako praktyk biznesu piastuję stanowiska kierownicze i menadżerskie w obszarach związanych ze sprzedażą, zakupami i operacją.
`,
`W związku z tym, że na co dzień prowadzę negocjacje, rozwiązuję spory i szukam porozumienia w trudnych sytuacjach zarówno wewnątrz organizacji jak i z klientami zewnętrznymi jest mi łatwiej pomagać stronom szukającym porozumienia.
W swojej pracy wykorzystuję elementy TSR (Terapia Skoncentrowana na Rozwiązaniach).
`      ,`

Moją ogromną pasją jest rozwój osobisty, wierzę, że każdy z nas ma potencjał, który czasami drzemie w nas ukryty i potrzebuje małego wsparcia aby ujrzeć światło dzienne.
Stąd prowadzone przeze mnie coachingi i warsztaty uwzględniają  tematykę związaną z wypaleniem zawodowym, radzeniem sobie ze stresem, wzmocnieniem poczucia własnej wartości,
 poprawa komunikacji i rozwiazywaniem konfliktów.`
``,``,``,

`Z wykształcenia jestem prawnikiem (UMCS) oraz mediatorem wpisanym na listę stałych mediatorów przy Sądzie Okręgowym w Lublinie.
Ukończyłam studia podyplomowe z zakresu mediacji szkolnych i sądowych (UMCS) i zaawansowane kursy z mediacji rodzinnych. `
,
`Jako absolwentka Szkoły Trenerów Grupy SET posiadam certyfikat Trenera Biznesu. Warsztat  coachingowy pogłębiałam w Akademii Instytutu Pozytywnej Terapii Kryzysu (ukończone dwa poziomy: Konsultant Kryzysowy oraz Coach i Mentor Kryzysowy).`,
`Od ponad 7 lat jestem również praktykiem mindfulness. Obecnie pogłębiam swój warsztat w Polskim Instytucie Minfulness przygotowując się do kursu nauczycielskiego.
`
,],
    desc: "Mediator, coach kryzysowy oraz trener biznesu.",
  },
];
</script>
