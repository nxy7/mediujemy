<template>
    <div class="flex flex-col space-y-2">
        <NuxtLink v-for="post in content" :href="`/aktualnosci/${post._path.substring(1)}`">{{ post.title }}</NuxtLink>
    </div>
</template>

<script setup>
const content = await queryContent('/').find()
console.log(content)

</script>