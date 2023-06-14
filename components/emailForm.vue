<template>
<v-text-field
      label="Main input"
      hide-details="auto"
    ></v-text-field>     
    <form action="mailto:kontakt@mediujemy.pl" class="flex flex-col space-y-2">
        <div class="mb-2 text-5xl font-semibold text-center text-primary">
            Formularz kontaktowy
        </div>

        <CustomInput name="name" display-name="Imię"></CustomInput>
        <CustomInput name="surname" display-name="Nazwisko"></CustomInput>
        <CustomInput name="subject" display-name="Temat wiadomości"></CustomInput>
        <!-- <CustomInput type="email" name="email" display-name="Email"></CustomInput> -->

        <input type="hidden" name="subject" value="test">

        <CustomTextfield name="body" display-name="Treść Wiadomości"></CustomTextfield>

        <input type="submit" value="Wyślij wiadomość" class="w-90 mt-7! mx-auto cursor-pointer px-4 py-2 rounded-sm !bg-secondary font-bold text-white">
    </form>
</template>

<script setup lang="ts">

</script>