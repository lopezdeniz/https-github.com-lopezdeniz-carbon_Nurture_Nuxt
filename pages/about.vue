<template>
  <section>
    <h1>About Us</h1>
    <p>
      Learn more about Carbon Nurture, our mission, vision, and commitment to sustainable living.
    </p>
  </section>
</template>

<script setup>
// Устанавливаем мета-данные для страницы
definePageMeta({
  title: "About Us - Carbon Nurture",
  meta: [
    {
      name: "description",
      content: "Discover the mission and vision of Carbon Nurture for a sustainable future.",
    },
    {
      name: "keywords",
      content: "about us, carbon nurture, sustainability, eco-friendly mission",
    },
    {
      property: "og:title",
      content: "About Us - Carbon Nurture",
    },
    {
      property: "og:description",
      content: "Learn about our commitment to creating a greener, more sustainable world.",
    },
    {
      property: "og:image",
      content: "https://example.com/og-image-about.jpg",
    },
    {
      property: "og:url",
      content: "https://example.com/about",
    },
  ],
});
</script>

<style scoped>
/* Стили для страницы About */
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
