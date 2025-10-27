import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: adapter(), // THIS REPLACES STATIC ADAPTER
  },
  preprocess: vitePreprocess()
};

export default config;
