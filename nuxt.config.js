export default defineNuxtConfig({
  compatibilityDate: "2025-02-13", // Добавлено, чтобы убрать предупреждение

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/css/main.css"
  ],

  app: {
    head: {
      title: "Carbon Nurture",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "Описание вашего сайта" },
        { name: "keywords", content: "carbon, sustainability, environment, eco-friendly, green energy" }
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
          defer: true
        }
      ]
    }
  }
});
