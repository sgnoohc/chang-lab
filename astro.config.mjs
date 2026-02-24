import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sgnoohc.github.io',
  base: '/chang-lab',
  integrations: [tailwind({ applyBaseStyles: false })],
});
