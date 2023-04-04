<template>
    <div class="flex flex-col sm:flex-row group rounded-md overflow-hidden duration-200 hover:shadow-lg">
        <div :class="`overflow-hidden ${photoSide && `order-2`}`">
            <img :src="member.photoSrc" alt="photo" class="w-full sm:w-70 duration-200 group-hover:scale-105">
        </div>
        <div class="flex flex-col px-3 py-2 w-100">
            <div class="font-semibold">{{ member.name }} {{ member.surname }}</div>

            <div class="grow">opisane doświadczenie i kwalifikacje?</div>
            <!-- <div>{{ member.surname }}</divhttps://nxy7.github.io/mediujemy/> -->
            <Quote class="italic text-center">{{ member.quote }}</Quote>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { member } from './member';

const props = defineProps<{ member: member, photoSide?: boolean }>()
</script>