<template>
    <div class="flex flex-col justify-center py-10 space-y-8 md:(w-3/4 m-auto)">
        <AktualnosciCard v-for="card in contentArr" v-bind="card"></AktualnosciCard>
    </div>
</template>

<script setup>
const contentArr = await queryContent('/').find()
console.log(contentArr)
</script>