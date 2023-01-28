<template>

    <div @click="componentToggle"
        :class="`flex flex-col -scroll-mt-30 overflow-hidden p-6 rounded-md group hover:bg-slate-100` + (state.open ? `` : ``)"
        :id="id">
        <div class="text-center text-xl font-semibold">{{
            title
        }}</div>
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
    id?: string,
    open?: boolean
}>()

// let isOpen = props.open
let state = reactive({
    open: props.open,
    contentHeight: 0
})
const router = useRouter();

function componentToggle() {
    state.open = !state.open

    if (state.open)
        router.push({
            hash: `#${props.id}`
        })
}

const content = ref<any>(null)

onMounted(() => {
    console.log("elo")
    state.contentHeight = content.value?.scrollHeight || 0
    console.log(content.value?.scrollHeight)
})
watch(
    () => props.open,
    (open) => {
        state.open = open
    }
)

</script>