import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wordcraft.ndjp.net',
  integrations: [
    react(),
    icon({ include: { ph: ['*'] } }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});