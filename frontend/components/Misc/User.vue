<template>
    <div class="flex flex-row items-center relative">
        <div :class="`${dropOpen ? `visible translate-y-0` : `invisible -translate-y-24`} fixed -bottom-24 bg-stone-200
            text-black transition-all duration-500 ease-in-out transform p-4 z-30 rounded-md shadow-xl`">
            <div
                class="rounded-md transition duration-500 ease-in-out transform hover:scale-110 bg-primary-600 text-white py-2 px-4">
                <a href="/login">Logout</a>
            </div>
        </div>

        <div class="text-sm font-semibold relative">
            {{ user.username }}
        </div>
        <button @click="_ => dropOpen = !dropOpen">
            <span class="sr-only">Open User dropdown</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </button>
    </div>
</template>
<script setup lang="ts">
const { user } = defineProps<{ user: { username: string; } }>()

const dropOpen = ref(false)
</script>