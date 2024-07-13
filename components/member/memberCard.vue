<template>
  <div class="flex flex-col sm:flex-row group  overflow-hidden duration-200 shadow-sm hover:(shadow-lg rounded-md)">
    <div :class="`overflow-hidden h-full ${photoSide && `order-2`}`">
      <img :src="member.photoSrc" alt="photo" class="min-h-full sm:w-[30rem] duration-200 group-hover:scale-105">
    </div>
    <div class="flex flex-col justify-center px-3 py-2 w-[60rem]">
      <div class="font-semibold">{{ member.name }} {{ member.surname }}</div>

      <div class="">{{ member.desc }}</div>
      <!-- <div>{{ member.surname }}</divhttps://nxy7.github.io/mediujemy/> -->
      <Quote class="italic text-center">{{ member.quote }}</Quote>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { member } from './member';

const props = defineProps<{ member: member, photoSide?: boolean }>()
</script>
