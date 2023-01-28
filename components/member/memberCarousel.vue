<template>
    <div class="flex flex-col space-y-9">
        <MemberCard v-for="person, id in props.members" :member="person" :photo-side="id % 2 == 1"></MemberCard>
    </div>
</template>

<script setup lang="ts">import type { member } from './member';

const props = defineProps<{ members: member[] }>()
</script>