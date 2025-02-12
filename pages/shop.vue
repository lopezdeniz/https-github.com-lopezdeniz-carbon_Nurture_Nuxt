<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})
</script>
<template>

        <div class="wix-store">
    <!-- Встраиваем страницу магазина Wix через iframe -->
    <iframe
      src="https://shop.carbonnurture.com/category/all-products"
      style="width:100%; height:100vh; border:0; overflow:hidden;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

       <!-- Обёртка Suspense для корректного SSR и предотвращения гидратационных ошибок   
      <h1 class="text-center">Наши товары</h1>
  
     
      <Suspense>
        <template #default>
          <div v-if="!wixData || !wixData.products || wixData.products.length === 0" class="text-center">
            <p>Товары не найдены.</p>
          </div>
          <div v-else class="row">
            <div v-for="product in wixData.products" :key="product.id" class="col-md-4 mb-4">
              <div class="card">
                <img :src="product.media?.mainMedia?.image?.url || defaultImage" class="card-img-top" alt="Изображение товара" />
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text" v-html="product.description"></p>
                  <p class="card-text"><strong>Цена:</strong> {{ product.price.formatted.price }}</p>
                  <a :href="product.productPageUrl?.base + product.productPageUrl?.path" class="btn btn-primary" target="_blank">
                    Открыть страницу товара
                  </a>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #fallback>
          <div class="text-center">
            <p>Загрузка товаров...</p>
          </div>
        </template>
      </Suspense>
  
      <div v-if="error" class="alert alert-danger text-center mt-3">
        {{ error.message }}
      </div> 
-->






    
  </template>
  
   <!--  <script setup lang="ts">
  const defaultImage = "https://via.placeholder.com/150";
  
  // Загрузка данных через useAsyncData – данные подгружаются до рендера страницы (SSR + клиент)
  const { data: wixData, error } = await useAsyncData("wixProducts", () => $fetch("/api/wix"));
  
  // Для отладки можно раскомментировать:
  // console.log("Полученные данные:", wixData.value);
  </script>
  
  <style scoped>
  .card img {
    height: 200px;
    object-fit: cover;
  }

  </style>-->
  






<style scoped>
.wix-store {
max-width: 2000px;
margin: 0px auto;
}
</style>
