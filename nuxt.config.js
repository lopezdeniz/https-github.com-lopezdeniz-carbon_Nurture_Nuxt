export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/css/main.css"
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
          // Если данный URL не доступен, можно обновить или удалить этот ресурс.
          href: "https://unpkg.com/ionicons@5.5.2/dist/ionicons.min.css"
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

  runtimeConfig: {
    public: {
      WIX_API_KEY: process.env.WIX_API_KEY || "",
      WIX_SITE_ID: process.env.WIX_SITE_ID || "",
      WIX_SHOP_URL: process.env.WIX_SHOP_URL || ""
    }
  },

  compatibilityDate: "2025-02-07"
});
