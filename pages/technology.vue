<template>
  <br>
  <div class="container">


    <!-- Первая строка: иконка и первый параграф -->
    <div class="row align-items-center mb-4">
      
      <div class="col-md-2 text-center">
        
        <img src="/assets/images/icon-leafs.png" alt="Icon 1" class="img-fluid" />
      </div>
      <div class="col-md-8">
        <h1 class="mb-5">Technology</h1>
        <p>
          Carbon Nurture has developed environmentally biodegradable plastics to support manufacturing of sustainable materials and regenerative economy. Our technology helps re-generating healthy soils and oceans to strengthen food chains and to re-create natural reserves. Soil-biodegradable products developed by CN help mitigating climate change by reducing carbon dioxide emissions due to sequestering carbon in soil and sediments.
        </p>
      </div>
    </div>

    <!-- Вторая строка: иконка и второй параграф -->
    <div class="row align-items-center mb-4">
      <div class="col-md-2 text-center">
        <img src="/assets/images/icon-leafs.png" alt="Icon 2" class="img-fluid" />
      </div>
      <div class="col-md-8">
        <p>
          Environmentally biodegradable plastics are designed for specific applications with required servicelife characteristics and properties. At their end-of-life they could be recycled biologically, physically, or chemically. Biological recycling is designed to take place at natural environmental conditions and does not require high-temperature composting infrastructure.
        </p>
      </div>
    </div>

    <!-- Третья строка: иконка и третий параграф -->
    <div class="row align-items-center mb-4">
      <div class="col-md-2 text-center">
        <img src="/assets/images/icon-leafs.png" alt="Icon 3" class="img-fluid" />
      </div>
      <div class="col-md-8">
        <p>
          The abiotic degradation is achieved by specially designed advanced redox-promoting catalyst, leading to complete conversion of polymers into biodegradable substances with high carbon utilization. Complete conversion prevents formation of persistent micro/nano-plastics.
        </p>
      </div>
    </div>
  </div>
  <br>
</template>


<script setup>
// Устанавливаем мета-данные для страницы
definePageMeta({
  title: "Technology - Carbon Nurture",
  meta: [
    {
      name: "description",
      content: "Explore advanced technologies for sustainable living and eco-friendly solutions.",
    },
    {
      name: "keywords",
      content: "sustainable technology, eco-friendly, carbon nurture, green solutions",
    },
    {
      property: "og:title",
      content: "Technology - Carbon Nurture",
    },
    {
      property: "og:description",
      content: "Discover cutting-edge sustainable technologies to help nurture your carbon footprint.",
    },
    {
      property: "og:image",
      content: "https://example.com/og-image-technology.jpg",
    },
    {
      property: "og:url",
      content: "https://example.com/technology",
    },
  ],
});
</script>

<style scoped>
/* Стили для страницы Technology */

p {
  font-size: 21px;
}

.img-fluid {
  max-width: 60%;
  height: auto;
}


</style>


