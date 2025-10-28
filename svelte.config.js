import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/components',
      $lib: 'src/lib'
    }
  },
  preprocess: vitePreprocess()
};

export default config;
