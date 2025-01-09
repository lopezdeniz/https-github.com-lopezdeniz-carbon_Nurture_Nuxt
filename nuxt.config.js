// nuxt.config.js
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css", // Подключение CSS Bootstrap
    "@/assets/css/main.css" // Ваш кастомный CSS
  ],

  app: {
    head: {
      title: "Carbon Nurture",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "Описание вашего сайта" }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/ionicons@5.5.2/dist/ionicons.min.css" // Ionicons
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript"
        },
        {
          type: "module",
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        },
        {
          nomodule: true,
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        }
      ]
    }
  },

  compatibilityDate: "2024-12-07"
});
