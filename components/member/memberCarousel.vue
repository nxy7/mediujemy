<template>
    <div class="flex flex-col space-y-2">
        <MemberCard v-for="person in props.members" :member="person"></MemberCard>
    </div>
</template>

<script setup lang="ts">import type { member } from './member';

const props = defineProps<{ members: member[] }>()
</script>