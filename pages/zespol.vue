<template>
  <div class="mt-8 flex">

    <div class="flex flex-col grow items-center">
      <!-- <Quote className="w-full lg:w-fit mb-10">
                Mediacje są naszą pasja i wierzymy, że każdy spór można rozwiązać na drodze
                porozumienia, współpracy w poszanowaniu praw drugiej strony
            </Quote> -->

      <span class="font-extrabold text-primary text-5xl mb-8">Nasz Zespół</span>
      <MemberCarousel :members="people"></MemberCarousel>
    </div>
    <div class="hidden">nawigacja</div>
  </div>
</template>


<script setup lang="ts">
import { member } from '~~/components/member/member';
// let base = process.env.NUXT_APP_BASE_URL || "/"
let base = useRuntimeConfig().public.baseUrl
console.log("base", base)


const people: member[] = [{
  name: "Agnieszka",
  surname: "Danieluk",
  photoSrc: base + "agnieszka2.jpg",
  quote: ` 
                        Wierzę w ludzi, i uważam, że sami najlepiej wiedzą czego potrzebują. Jako mediator
                        towarzyszę
                        im
                        w drodze do budowania porozumienia poprzez słuchanie i wspieranie w tej drodze
    `,
  desc: "Mediator, coach kryzysowy oraz doradca biznesowy."
},
  // {
  //     name: "Iwona",
  //     surname: "",
  //     photoSrc: base + "iwona01.jpg",
  //     quote: `cytat iwony`,
  //     desc: "Coś o sobie"
  // },
]
</script>
