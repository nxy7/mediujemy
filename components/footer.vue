<template>
    <div w-full
        class="bg-slate-900 mt-20 min-h-80 text-white lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <div class="flex flex-col items-center">
            <img src="/logo4.png" alt="logo" class="h-50">
            <!-- <div class="text-center text-sm">
                Centrum Mediacji Komunikacji i szkoleń Mediujemy jest niezależną firma świadczącą usługi mediacyjne dla
                osób prywatnych oraz podmiotów gospodarczych na terenie województwa lubelskiego.
            </div> -->
        </div>
        <div class="hidden lg:flex flex-col justify-center items-center">
            <div class="text-xl mb-4">Menu</div>
            <ul class="flex flex-col items-center">
                <li>
                    <NuxtLink href="/">Strona Główna</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="zespol">Nasz Zespół</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="mediacje">O Mediacji</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="cennik">Cennik</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="aktualnosci">Aktualności</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="kontakt">Kontakt</NuxtLink>
                </li>
            </ul>
        </div>
        <EmailForm></EmailForm>
    </div>
</template>