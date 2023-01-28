<template>
    <Navbar></Navbar>
    <div class="relative flex flex-col h-150 shadow-inner items-center justify-center overflow-hidden">
        <div ref="imageRef" class="absolute w-full h-170 top-0 -z-1" bg="[url(/bg2.jpeg)] center cover"></div>
        <!-- <img src="/logo2.png"
            class="h-52 object-contain backdrop-shadow-md brightness-200 duration-200 hover:(scale-102)" /> -->
        <div class="px-8 md:px-0 text-white mt-56 text-5xl font-bold drop-shadow-lg text-center">Porozumienie bez barier
        </div>
    </div>

</template>

<script setup lang="ts">
import { useParalax } from './useParalax';

const imageRef = ref(null)
useParalax(imageRef)

</script>