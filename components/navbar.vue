<template>
    <div
        class="sticky w-full top-0 flex justify-center items-center z-40 shadow-lg text-black !bg-white min-h-20 backdrop-blur-sm">
        <!-- desktop -->
        <div class="hidden lg:flex w-full px-4 space-x-12">
            <NuxtLink href="/" class="self-start">
                <img src="/logo1.png" class="self-start h-12" />
            </NuxtLink>
            <div class="flex grow justify-end items-center space-x-6 pr-8">
                <NuxtLink v-for="link in links" :href="link.href"
                    class="px-4 py-3 duration-200 text-md font-semibold hover:text-black">{{
                        link.text
                    }}
                </NuxtLink>
            </div>
        </div>

        <!-- mobile -->
        <div class="w-full px-4 flex justify-end lg:hidden">

            <button class="i-mdi-menu" @click="isMobileVisible = !isMobileVisible">

            </button>
            <Teleport to="body">
                <div v-if="isMobileVisible" @click="isMobileVisible = false"
                    class="fixed top-0 left-0 z-30 pt-20 flex flex-col h-screen w-screen bg-slate-100">
                    <NuxtLink v-for="link in links" :href="link.href"
                        class="w-full text-center text-3xl font-semibold duration-75 hover:bg-slate-200 py-8">
                        {{ link.text }}
                    </NuxtLink>
                </div>
            </Teleport>

        </div>
    </div>
</template>


<script setup lang="ts">
const isMobileVisible = ref(false)

const links = [
    { href: "zespol", text: "Nasz zespół" },
    { href: "mediacje", text: "O mediacji" },
    { href: 'cennik', text: "Cennik" },
    { href: "aktualnosci", text: "Aktualności" },
    { href: "kontakt", text: "Kontakt" },
]
const bgVariable = ref('#FFFFF1')
</script>

<style lang="scss">
#__nuxt,
.mainContainer,
body {
    background-color: v-bind(bgVariable)
}
</style>