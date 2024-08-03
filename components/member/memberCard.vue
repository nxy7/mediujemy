<template>
  <div class="flex flex-col sm:flex-row group  overflow-hidden duration-200 shadow-sm hover:(shadow-lg rounded-md)">
    <div :class="`overflow-hidden h-full ${photoSide && `order-2`}`">
      <img :src="member.photoSrc" alt="photo" class="min-h-full sm:w-[30rem] duration-200 group-hover:scale-105">
    </div>
    <div class="flex flex-col items-center justify-center px-3 py-2 ml-8 w-[60rem] gap-1">
      <div class="font-semibold text-xl">{{ member.name }} {{ member.surname }}</div>
      <div class="mb-4 ">{{ member.desc }}</div>
      <!-- <Quote class="italic text-center"> -->
        <p v-for="m in props.member.quote" class="" v-html="m">
          
        </p>
      <!-- </Quote> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { member } from './member';

const props = defineProps<{ member: member, photoSide?: boolean }>()
</script>
