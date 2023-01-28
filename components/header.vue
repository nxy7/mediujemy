<template>
    <Navbar></Navbar>
    <div class="relative flex flex-col h-150 shadow-inner items-center justify-center overflow-hidden">
        <div ref="imageRef" class="absolute w-full h-170 top-0 -z-1" bg="[url(/bg2.jpeg)] center cover" :style="{
            transform: `translate3d(0, ${offset}rem, 0)`
        }"></div>
        <!-- <img src="/logo2.png"
            class="h-52 object-contain backdrop-shadow-md brightness-200 duration-200 hover:(scale-102)" /> -->
        <div class="px-8 md:px-0 text-white mt-56 text-5xl font-bold drop-shadow-lg text-center">Porozumienie bez barier
        </div>
    </div>

</template>

<script setup lang="ts">
let offset = ref(0)
const imageRef = ref(null)
let handleScroll = (event: any) => {
    let windowScroll = window.scrollY
    if (windowScroll > 2000)
        return

    offset.value = windowScroll / 100
    // console.log(windowScroll, offset.value)
}
onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

</script>