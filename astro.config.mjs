// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [new URL("https://dummyimage.com/**")],
    },

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [alpinejs({ entrypoint: "/src/entrypoint" }), sitemap()],
});
