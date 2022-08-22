import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { imagePreprocessor } from 'svimg';

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
    preprocess: [
        imagePreprocessor({
            inputDir: 'static',
            outputDir: 'static/g',
            webp: true,
            avif: true
        }), 
        preprocess()
    ],
    experimental: {
        useVitePreprocess: true,
    },
};

export default config;
