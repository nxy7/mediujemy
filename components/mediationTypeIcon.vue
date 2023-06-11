<template>
    <div class="w-full md:w-90 h-40 flex flex-col justify-center items-center rounded-sm duration-200 hover:bg-slate-200">
        <div :class="icon 
            + ` text-secondary`"></div>
        <div class="w-28 text-center">{{ subtitle }}</div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>