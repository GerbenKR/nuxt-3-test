export default defineNuxtConfig({
    runtimeConfig: {
        STATUS_API_URL: process.env.STATUS_API_URL,
    },

    modules: ['@nuxtjs/tailwindcss'],

    tailwindcss: {
        configPath: './tailwind.config.js',
    },
});
