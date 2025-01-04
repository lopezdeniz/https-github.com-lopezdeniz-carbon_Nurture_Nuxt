// nuxt.config.js
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css", // Подключение CSS Bootstrap
    "@/assets/css/main.css" // Подключение файла main.css
  ],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/ionicons@5.5.2/dist/ionicons.min.css", // Подключение CSS Ionicons
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", // Подключение JS Bootstrap через CDN
          type: "text/javascript",
        },
        {
          type: "module",
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js", // Подключение ES-модуля Ionicons
        },
        {
          nomodule: true,
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js", // Подключение fallback-скрипта Ionicons
        },
      ],
    },
  },

  compatibilityDate: "2024-12-07",
});
