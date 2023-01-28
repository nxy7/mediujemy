<template>

    <div class="flex group rounded-md overflow-hidden duration-200 shadow-sm hover:shadow-lg">
        <div :class="`overflow-hidden ${photoSide && `order-2`}`">

            <img :src="member.photoSrc" alt="photo" class="w-70 duration-200 group-hover:scale-105">
        </div>
        <div class="flex flex-col px-3 py-2 w-140">
            <div class="font-semibold">{{ member.name }} {{ member.surname }}</div>

            <div class="grow">opisane doświadczenie i kwalifikacje?</div>
            <!-- <div>{{ member.surname }}</divhttps://nxy7.github.io/mediujemy/> -->
            <div class="italic">{{ member.quote }}</div>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { member } from './member';

const props = defineProps<{ member: member, photoSide?: boolean }>()
</script>