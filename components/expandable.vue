<template>

    <div @click="state.open = !state.open"
        :class="`flex flex-col overflow-hidden p-6 rounded-md hover:bg-slate-100` + (state.open ? `` : ``)">
        <div class="text-center text-xl font-semibold">{{ title }}</div>
        <div :class="`overflow-hidden duration-300 ` + (state.open ? `` : `!max-h-0`)" ref="content"
            :style="`max-height: ${state.contentHeight || 1000}px`">
            <div class="p-2">
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
let props = defineProps<{
    title: string,
    open?: boolean
}>()

// let isOpen = props.open
let state = reactive({
    open: props.open,
    contentHeight: 0
})

const content = ref<any>(null)

onMounted(() => {
    console.log("elo")
    state.contentHeight = content.value?.scrollHeight || 0
    console.log(content.value?.scrollHeight)
})

</script>