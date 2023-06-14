<template>
    <div class="gap-4 relative flex bg-primary bg-opacity-5">
        <label :for="name" :class="`absolute duration-150 rounded-sm ${(focused || inputText.length > 0) ? `top-1 left-2 text-sm` : `top-3 text-lg left-4`} pointer-events-none`">{{ displayName ?? name }}</label>
        <input :type="type ?? 'text'" class="bg-transparent grow p-2 pt-5" :name="name" ref="elementRef"
            @input="(e) => {
                inputText = (e.target as HTMLInputElement).value;
            }"
            @focusin="()=>{
            focused= true
            }" 
            @focusout="()=>{focused=false}"
            >
    </div>
</template>

<script setup lang="ts">
let props = defineProps<{
    name: string,
    displayName?: string,
    type?: string
}>()

let focused = ref(false)
let elementRef = ref(null)



let inputText = ref("")
onMounted(()=>{
    if (elementRef.value) {
        inputText.value = (elementRef.value as HTMLInputElement).value;
    }
})
</script>