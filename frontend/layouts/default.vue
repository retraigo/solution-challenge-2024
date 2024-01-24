<template>
    <div class="tracking-wide flex flex-col items-center h-screen bg-white dark:bg-zinc-800">
        <section class="flex w-full h-screen">
            <UiHeader />

            <main class="flex flex-col flex-grow overflow-y-auto">
                <section class="px-4 flex-grow">
                    <slot />
                </section>
                <section class="mt-8 w-full">
                    <div class="w-full bg-primary-650 dark:bg-primary-350 text-white p-2">
                        <UiPreFooter />
                    </div>
                    <UiFooter />
                </section>
            </main>
        </section>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
useHead({
    title: `${route.meta.title || `Mentoring`}`
})
</script>