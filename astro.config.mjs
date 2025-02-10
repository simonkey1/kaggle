import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://powerbi-project.netlify.app/blog/",

  vite: {
    define: {
      "process.env.LANG": JSON.stringify("es_ES.UTF-8"),
    },
  },

  integrations: [preact()],
});