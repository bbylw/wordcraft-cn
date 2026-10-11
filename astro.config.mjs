import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wordcraft.ndjp.net',
  integrations: [
    react(),
    icon({ include: { ph: ['*'] } }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});