// server/api/wix.ts

export default defineEventHandler(async (event) => {
    // Для отладки: вывод метода запроса в консоль
    console.log("Запрос на /api/wix методом:", event.req.method);
  
    const config = useRuntimeConfig();
    const WIX_API_KEY: string = String(config.public.WIX_API_KEY || "");
    const WIX_SITE_ID: string = String(config.public.WIX_SITE_ID || "");
  
    try {
      // Обратите внимание: возможно, для вашего аккаунта актуален endpoint v2.
      const response = await $fetch("https://www.wixapis.com/stores/v2/products/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": WIX_API_KEY,
          "wix-site-id": WIX_SITE_ID
        },
        body: {
          query: {},
          paging: { limit: 10, offset: 0 }
        }
      });
  
      console.log("Ответ от Wix API:", response);
  
      if (!response || typeof response !== "object" || !("products" in response)) {
        throw new Error("API не вернул список товаров");
      }
  
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
    
      throw error;
    }
  });
  