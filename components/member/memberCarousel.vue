<template>
    <div class="flex gap-9 flex-wrap justify-center">
        <MemberCard v-for="person, id in props.members" :member="person" :photo-side="id % 2 == 1"></MemberCard>
    </div>
</template>

<script setup lang="ts">
import type { member } from './member';

const props = defineProps<{ members: member[] }>()
</script>