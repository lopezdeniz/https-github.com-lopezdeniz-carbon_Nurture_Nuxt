<template>
    <div>
      <PageHeader /> <!-- Шапка -->
      <main>
        <NuxtPage /> <!-- Здесь рендерится содержимое текущей страницы -->
      </main>
      <AppFooter /> <!-- Футер -->
    </div>
  </template>
  
  <script>
  import PageHeader from "~/components/Header.vue"; // Ваш компонент шапки
  import AppFooter from "~/components/Footer.vue"; // Ваш компонент футера
  
  export default {
    components: {
      PageHeader,
      AppFooter,
    },
  };
  </script>
  
  <style scoped>
  main {
    padding: 20px; /* Общие отступы для контента */
  }
  </style>

