<template>
    <div class="flex flex-col md:(flex-row px-10) gap-6">
        <div class="flex flex-col grow rounded-md overflow-hidden">
            <div class="h-80 w-full mb-7 overflow-hidden relative">
                <img ref="imgRef" :src="content.imageSrc" alt="" class="absolute bottom-0 h-100 w-full object-cover">
            </div>
            <div class="px-7">

                <div class="grow text-2xl font-bold text-center">{{ content.title }}</div>
                <ContentRenderer :value="content" />
            </div>
        </div>
        <div class="w-full md:w-60">
            <PostsPostNavigation></PostsPostNavigation>
        </div>
    </div>
</template>

<script setup>
import { useParalax } from '~/components/useParalax'

const route = useRoute()
console.log(route.params.wpis)
let content
try {
    content = await queryContent('/' + route.params.wpis).findOne()
    console.log(content)
} catch {
    console.log("didnt fint content")
}

const imgRef = ref(null)
useParalax(imgRef, .7)

</script>