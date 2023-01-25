
<template>
    <div class="sticky w-full top-0 flex justify-center items-center bg-white z-40 shadow-lg h-16">
        <!-- desktop -->
        <ul class="hidden md:flex w-full justify-center items-center space-x-12">
            <NuxtLink href="/">
                <img src="/logo1.png" class="self-start h-12" />
            </NuxtLink>
            <NuxtLink href="zespol">Nasz zespół</NuxtLink>
            <NuxtLink href="mediacje">O mediacji</NuxtLink>
            <NuxtLink href="cennik">Cennik</NuxtLink>
            <NuxtLink href="aktualnosci">Aktualności</NuxtLink>
            <NuxtLink href="kontakt">Kontakt</NuxtLink>
        </ul>

        <!-- mobile -->
        <button class="i-mdi-menu md:hidden">

        </button>
    </div>
</template>