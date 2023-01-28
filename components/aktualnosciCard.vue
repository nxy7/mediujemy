<template>

    <div
        :class="`flex flex-col group overflow-hidden rounded-md duration-200 shadow-md hover:(shadow-lg) md:(flex-row)`">
        <div class="overflow-hidden">
            <img class="h-50 w-60 duration-200 group-hover:scale-105 " :src="props.imageScr" alt="">
        </div>
        <div :class="`flex flex-col grow h-full items-center justify-center z-10 py-3`">
            <div>{{ props.subtitle }}</div>
            <div class="grow">{{ props.content }}</div>
        </div>
    </div>

</template>

<script setup lang="ts">

const props = defineProps<{
    imageScr: string
    subtitle: string
    content: string
}>()

</script>