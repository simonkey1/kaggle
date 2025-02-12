import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://powerbi-project.netlify.app/blog/",
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  vite: {
    define: {
      "process.env.LANG": JSON.stringify("es_ES.UTF-8"),
    },

    plugins: [tailwindcss()],
  },

  integrations: [preact()],
});