<template>
    <div :class="'relative bg-white shadow-md rounded-sm p-6 text-center ' + className">
        <div class="absolute i-mdi-format-quote-open bottom-0 left-0 h-7 w-7"></div>
        <slot></slot>
        <div class="absolute i-mdi-format-quote-close right-0 top-0 h-7 w-7"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    className?: string
}>()
</script>
