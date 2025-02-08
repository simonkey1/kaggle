import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com",
  vite: {
    define: {
      "process.env.LANG": JSON.stringify("es_ES.UTF-8"),
    },
  },
});