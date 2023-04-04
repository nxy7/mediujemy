<template>
    <div class="p-8 shadow-md bg-white rounded-md flex flex-col space-y-4 max-w-160 h-full">
        <div class="font-bold text-3xl">
            <slot name="title"></slot>
        </div>
        <div class="grow">
            <slot name="text"></slot>
        </div>
        <NuxtLink :href="moreInfoHref" class="
                w-fit duration-100 p-4 border border-secondary rounded-md font-semibold
                hover:(bg-secondary text-white)">{{ buttonText || "Dowiedz się więcej" }}</NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        buttonText: String,
        moreInfoHref: {
            type: String,
            required: true
        }
    },
}
</script>