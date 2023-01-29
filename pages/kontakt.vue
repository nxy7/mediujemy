<template>
    <div class="flex flex-col space-y-4">
        <div class="text-center text-xl text-semibold">Formularz Kontaktowy</div>
        <div class="flex space-x-4 items-center">
            <!-- <div class="w-40 text-end">Imie i nazwisko:</div> -->
            <AInput label="Imie i nazwisko"></AInput>
            <!-- <input type="text" class="py-1 px-3 grow rounded-md bg-slate-100"> -->
        </div>
        <div class="flex space-x-4 items-center">
            <!-- <div class="w-40 text-end">Email:</div> -->
            <AInput label="Email" type="email"></AInput>
            <!-- <input type="text" class="py-1 px-3 grow rounded-md bg-slate-100"> -->
        </div>
        <div class="flex space-x-4 items-center">
            <!-- <div class="w-40 text-end">Wiadomość:</div> -->
            <ATextarea label="Wiadomość"></ATextarea>
            <!-- <input type="text" class="py-1 px-3 grow rounded-md bg-slate-100"> -->
        </div>
    </div>
</template>