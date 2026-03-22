import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://anaritagomes.github.io',
  base: '/anaritagomes',
  integrations: [mdx(), tailwind()],
});
