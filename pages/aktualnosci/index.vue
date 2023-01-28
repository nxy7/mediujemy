<template>
    <div class="flex flex-col justify-center py-10 space-y-8 md:(w-3/4 m-auto)">
        <AktualnosciCard v-for="card in aktualnosci" v-bind="card"></AktualnosciCard>
    </div>
</template>

<script setup>
const aktualnosci = [
    {
        imageSrc: "https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149162009.jpg?w=2000",
        subtitle: "Test",
        date: "19.01.2023",
        content: "Treść posta"
    }, {
        imageSrc: "https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149162009.jpg?w=2000",
        subtitle: "Test",
        date: "19.01.2023",
        content: "Treść posta"
    }, {
        imageSrc: "https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149162009.jpg?w=2000",
        subtitle: "Test",
        date: "19.01.2023",
        content: "Treść posta"
    }]
</script>