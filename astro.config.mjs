import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tuskerlodge.co.uk",
  integrations: [mdx(), icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
