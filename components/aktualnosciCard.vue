<template>

    <a :href="base + `aktualnosci` + props._path"
        :class="`flex flex-col group overflow-hidden rounded-md duration-200 shadow-md hover:(shadow-lg) md:(flex-row)`">
        <div class="overflow-hidden">
            <img class="w-full md:w-60 duration-200 group-hover:scale-105 " :src="props.imageSrc" alt="">
        </div>
        <div :class="`flex flex-col grow h-full items-center justify-center z-10 py-3`">
            <div class="mb-4 flex relative w-full justify-center">
                <div class="font-semibold">{{ props.title }}</div>
                <div class="text-sm absolute right-5">{{ props.date }}</div>
            </div>
            <div class="grow">{{ props.content }}</div>
        </div>
    </a>

</template>

<script setup lang="ts">
let base = useRuntimeConfig().public.baseUrl
const props = defineProps<{
    title: string
    _path: string
    imageSrc: string
    date: string
    content: string
}>()

</script>