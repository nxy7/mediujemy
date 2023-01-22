<template>
    <div class="p-8 m-8 shadow-md rounded-md flex flex-col space-y-4">
        <div class="font-bold text-3xl">
            <slot name="title"></slot>
        </div>
        <div class="grow">
            <slot name="text"></slot>
        </div>
        <NuxtLink :href="moreInfoHref" class="
        w-fit duration-100 p-4 border border-red-200 rounded-md font-semibold
        hover:(bg-red-300 text-white)">{{ buttonText || "Dowiedz się więcej" }}</NuxtLink>
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