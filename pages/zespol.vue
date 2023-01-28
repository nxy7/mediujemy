<template>
    <div class="mt-8 flex flex-col items-center">
        <Quote className="max-w-1/2 mb-10">
            Mediacje są naszą pasja i wierzymy, że każdy spór można rozwiązać na drodze
            porozumienia, współpracy w poszanowaniu praw drugiej strony
        </Quote>


        <MemberCarousel :members="people"></MemberCarousel>
    </div>
</template>


<script setup lang="ts">
import { member } from '~~/components/member/member';

const people: member[] = [{
    name: "Agnieszka",
    surname: "Danieluk",
    photoSrc: "/agnieszka2.jpg",
    quote: ` 
                        "Wierzę w ludzi, i uważam, że sami najlepiej wiedzą czego potrzebują. Jako mediator
                        towarzyszę
                        im
                        w drodze do budowania porozumienia poprzez słuchanie i wspieranie w tej drodze"
    `,
    desc: ""
}, {
    name: "Iwona",
    surname: "Nieznam",
    photoSrc: "/iwona01.jpg",
    quote: "",
    desc: "Coś o sobie"
}]
</script>