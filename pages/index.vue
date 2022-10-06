<script lang="ts" setup>
import { statusAPIResponse } from '../types/statusApiResponse';

useHead({
    title: 'GerbenKr Status',
});

const { pending, data } = await useLazyFetch<statusAPIResponse>('/api/status');
</script>
<template>
    <div class="h-full min-h-screen bg-[#202020] text-white">
        <div class="container mx-auto w-full max-w-[800px]">
            <Header />

            <div class="mt-8">
                <h2 class="text-2xl font-medium">Statuses</h2>

                <div v-if="pending == true">
                    <p>Loading</p>
                </div>
                <div v-if="pending == false && data.success == true">
                    <StatusList :statuses="data.data.monitors" />
                </div>
            </div>
        </div>
    </div>
</template>
