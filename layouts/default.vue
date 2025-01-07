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
  import PageHeader from "~/components/Header.vue"; //  компонент шапки
  import AppFooter from "~/components/Footer.vue"; //  компонент футера
  
  export default {
    components: {
      PageHeader,
      AppFooter,
    },
  };
  </script>
  
  <style scoped>

  </style>

