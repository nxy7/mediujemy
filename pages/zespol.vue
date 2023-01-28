<template>
    <div class="mt-8 flex flex-col items-center">
        <Quote className="max-w-1/2">
            Mediacje są naszą pasja i wierzymy, że każdy spór można rozwiązać na drodze
            porozumienia, współpracy w poszanowaniu praw drugiej strony
        </Quote>


        <div class="grid grid-cols-2">
            <MemberCarousel :members="people"></MemberCarousel>
        </div>
    </div>
</template>


<script setup lang="ts">
import { member } from '~~/components/member/member';

const people: member[] = [{
    name: "Agnieszka",
    surname: "Danieluk",
    photoSrc: "",
    desc: "Coś o sobie"
}, {
    name: "Iwona",
    surname: "Nieznam",
    photoSrc: "",
    desc: "Coś o sobie"
}]
</script>