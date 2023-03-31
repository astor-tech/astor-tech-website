import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// // https://astro.build/config
// import preact from "@astrojs/preact";

// // https://astro.build/config
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // adapter: netlify(),
});
