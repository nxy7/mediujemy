<template>
    <form class="flex flex-col space-y-2">
        <div class="mb-2 text-5xl font-semibold text-center">
            Formularz kontaktowy
        </div>
        <div>
            <label for="name">Imie</label>
            <input type="text" class="grow" name="name">
        </div>
        <div class="space-x-4 flex">
            <label for="surname">Nazwisko</label>
            <input type="text" class="grow" name="surname">
        </div>
        <div class="space-x-4 flex">
            <label for="email">Email</label>
            <input type="text" class="grow" name="email">
        </div>
        <div class="space-x-4 flex">
            <label for="message">Treść Wiadomości</label>
            <input type="text" class="grow" name="message">
        </div>
        <input type="submit" value="Wyślij wiadomość" class="cursor-pointer px-4 py-2 rounded-sm !bg-slate-100">
    </form>
</template>