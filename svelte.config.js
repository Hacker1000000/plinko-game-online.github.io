import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Enable Vite preprocessing for Svelte
  preprocess: vitePreprocess(),

  kit: {
    // Use the Vercel adapter for deployments
    adapter: vercel(),

    // Optional: if your project is in a subdirectory, set 'files.assets' or 'paths.base' here
    // paths: {
    //   base: ''
    // },
    
    // Optional: clear out default options for adapter-static if you previously had it
    // adapter-static options removed
  }
};

export default config;
