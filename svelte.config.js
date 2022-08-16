import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        prerender: {
            default: true,
        },
    },
    experimental: {
        useVitePreprocess: true,
    },
};

export default config;
