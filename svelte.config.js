import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: false
          }),
        prerender: {
            default: true,
        },
    },
    experimental: {
        useVitePreprocess: true,
    },
};

export default config;
