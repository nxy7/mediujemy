<template>
    <div w-full class="bg-darker h-80 mt-20 text-white lg:px-20 grid grid-cols-1 md:grid-cols-3 place-items-center">
        <div class="flex flex-col items-center">
            <img src="/logo2.png" alt="logo" class="h-40">
            <div class="text-center text-sm">
                Centrum Mediacji Komunikacji i szkoleń Mediujemy jest niezależną firma świadczącą usługi mediacyjne dla
                osób prywatnych oraz podmiotów gospodarczych na terenie województwa lubelskiego.
            </div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <div class="text-xl mb-4">Menu</div>
            <ul class="flex flex-col items-center">
                <li><a href="/">Strona Główna</a></li>
                <li><a href="/zespol">Nasz Zespół</a></li>
                <li><a href="/mediacje">O Mediacji</a></li>
                <li><a href="/cennik">Cennik</a></li>
                <li><a href="/aktualnosci">Aktualności</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
            </ul>
        </div>
        <EmailForm></EmailForm>
    </div>
</template>