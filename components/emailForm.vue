<template>
    <div class="flex flex-col space-y-2">
        <div class="mb-2">
            Formularz kontaktowy
        </div>
        <div class="space-x-4 flex">
            <span>Imię</span>
            <input type="text" class="grow">
        </div>
        <div class="space-x-4 flex">
            <span>Nazwisko</span>
            <input type="text" class="grow">
        </div>
        <div class="space-x-4 flex">
            <span>Email</span>
            <input type="text" class="grow">
        </div>
        <div class="space-x-4 flex">
            <span>Treść Wiadomości</span>
            <input type="text" class="grow">
        </div>
        <div>
            <input type="submit" value="Wyślij wiadomość">
        </div>
    </div>
</template>