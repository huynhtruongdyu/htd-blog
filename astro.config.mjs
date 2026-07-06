// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://duyhuynh.net',
    integrations: [sitemap()],
    i18n:{
        locales: ["en", "vi"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: false,
            fallbackType: "redirect"
        }
    }
});
