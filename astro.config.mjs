import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://openmaja.org',
  output: 'static',
  integrations: [mdx()],
});
