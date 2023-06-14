<template>
    <div class="gap-4 relative flex bg-primary bg-opacity-5">
        <label :for="name" :class="`absolute duration-150 rounded-sm left-2 top-1 text-sm  pointer-events-none`">{{ displayName ?? name }}</label>
        <textarea type="textfield" class="bg-transparent grow min-h-50 p-2 pt-5" 
            :name="name" 
            @input="(e) => { inputText = (e.target as HTMLInputElement).value; }"
            @focusin="()=>{ focused= true }" 
            @focusout="()=>{focused=false}"
            />
    </div>
</template>

<script setup lang="ts">
let props = defineProps<{
    name: string,
    displayName?: string,
}>()
let focused = ref(false)
let inputText = ref("")
</script>