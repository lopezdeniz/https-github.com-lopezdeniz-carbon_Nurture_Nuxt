<template>
  <section>
    <h1>Our Products</h1>
    <p>Explore our wide range of eco-friendly and sustainable products designed for your needs.</p>
  </section>
</template>

<script setup>
// Устанавливаем мета-данные для страницы
definePageMeta({
  title: "Products - Carbon Nurture",
  meta: [
    {
      name: "description",
      content: "Browse our collection of eco-friendly products for sustainable living.",
    },
    {
      name: "keywords",
      content: "eco-friendly products, sustainable living, green solutions, carbon nurture",
    },
    {
      property: "og:title",
      content: "Products - Carbon Nurture",
    },
    {
      property: "og:description",
      content: "Discover our innovative eco-friendly products designed for a sustainable future.",
    },
    {
      property: "og:image",
      content: "https://example.com/og-image-products.jpg",
    },
    {
      property: "og:url",
      content: "https://example.com/products",
    },
  ],
});
</script>

<style scoped>
/* Стили для страницы Products */
h1 {
  font-size: 2rem;
  color: #333;
}
p {
  font-size: 1.25rem;
  color: #555;
  line-height: 1.6;
}
</style>
