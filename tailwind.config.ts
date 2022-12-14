module.exports = {
    plugins: [],
    content: [`components/**/*.{vue,js}`, `layouts/**/*.vue`, `pages/**/*.vue`, `composables/**/*.{js,ts}`, `plugins/**/*.{js,ts}`, `App.{js,ts,vue}`, `app.{js,ts,vue}`],
    theme: {
        extend: {
            colors: {
                darkGray: '#202020',
                pink: '#ff0050',
            },
        },
    },
};
