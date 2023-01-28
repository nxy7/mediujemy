<template>

    <div class="flex flex-col">
        <div>{{ member.name }}</div>
        <div>{{ member.surname }}</div>
        <div>{{ member.desc }}</div>
    </div>

</template>

<script setup lang="ts">
import type { member } from './member';

const props = defineProps<{ member: member }>()
</script>