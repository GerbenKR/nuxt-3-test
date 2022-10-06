const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    try {
        const response = await fetch(runtimeConfig.STATUS_API_URL, {
            method: 'POST',
        });

        if (!response.ok) {
            throw 'Request to uptimerobot failed';
        }

        const data = await response.json();

        if (data.stat !== 'ok') {
            throw 'Uptimerobot response is not good';
        }

        return {
            success: true,
            data: data,
        };
    } catch (error) {
        return {
            success: false,
            error: error,
        };
    }
});
