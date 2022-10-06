<script lang="ts" setup>
import { Monitor } from '../types/statusApiResponse';

defineProps({
    statuses: {
        required: true,
    },
});
</script>
<template>
    <div class="mt-5 flex flex-col gap-5">
        <div v-for="(item) in (statuses as Monitor[])" :key="item.id">
            <!-- Online -->
            <div v-if="item.status == 2" class="flex items-center gap-4 rounded-md bg-[#2b2b2b] p-6">
                <svg class="h-10 w-10 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                </svg>

                <div>
                    <h3 class="text-2xl font-medium">{{ item.friendly_name }}</h3>
                    <p class="font-bold text-green-500">Online</p>
                </div>
            </div>

            <!-- Offline -->
            <div v-if="item.status == 8 || item.status == 9" class="flex items-center gap-4 rounded-md bg-[#2b2b2b] p-6">
                <svg class="h-10 w-10 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>

                <div>
                    <h3 class="text-2xl font-medium">{{ item.friendly_name }}</h3>
                    <p class="font-bold text-red-500">Offline</p>
                </div>
            </div>

            <!-- Paused -->
            <div v-if="item.status == 0 || item.status == 1" class="flex items-center gap-4 rounded-md bg-[#2b2b2b] p-6">
                <svg class="h-10 w-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>

                <div>
                    <h3 class="text-2xl font-medium">{{ item.friendly_name }}</h3>
                    <p class="font-bold text-gray-500">Paused</p>
                </div>
            </div>
        </div>
    </div>
</template>
