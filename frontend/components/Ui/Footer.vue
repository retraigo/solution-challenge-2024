<template>
    <footer class="p-4 w-full font-azonix mt-8">
        <div
            class="border-t-[0.5px] border-primary-650 dark:border-primary-350 w-full py-4 relative transition-colors duration-500 ease-in-out mx-auto mt-4">
            <div class="absolute inset-0 -top-4 flex justify-center items-start z-10">
                <div class="relative flex justify-center items-center">
                    <div
                        class="absolute bg-white dark:bg-zinc-900 rounded-full blur-md w-16 h-16 z-10 transition-colors duration-500 ease-in-out" />
                    <MiscLogo class="w-8 h-8 z-20 relative" />
                </div>
            </div>
            <div class="flex items-center justify-center relative z-20 text-xs text-zinc-500">
                © {{ COPYRIGHT_SINCE }} - {{ new Date().getFullYear() }}
                {{ COPYRIGHT_OWNER }}
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
</script>
  