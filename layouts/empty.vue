<template>
    <div>
  <PageHeader />
    <!-- Только содержимое страницы -->
    <NuxtPage />
  </div>
  </template>

<script>
import PageHeader from "~/components/Header.vue"; //  компонент шапки


export default {
  components: {
    PageHeader,
  },
};
</script>
  