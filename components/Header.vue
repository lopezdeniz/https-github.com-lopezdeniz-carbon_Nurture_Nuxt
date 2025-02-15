<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

// Управление состоянием мобильного меню
const isMenuOpen = ref(false);
const route = useRoute();

// Функция для переключения меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Функция закрытия меню при клике на пункт
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Автоматическое закрытие меню при смене маршрута
watchEffect(() => {
  isMenuOpen.value = false;
});

// Проверка активного маршрута
const isActive = (path) => route.path === path;
</script>

<template>
  <header class="header-bg">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Логотип -->
        <nuxt-link class="navbar-brand" to="/">
          <img src="/assets/images/logo.png" alt="Carbon Nurture Logo" />
        </nuxt-link>

        <!-- Кнопка-бургер -->
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Навигационное меню -->
        <div
          :class="['collapse', 'navbar-collapse', { show: isMenuOpen }]"
        >
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link" :class="{ active: isActive('/') }" to="/" @click="closeMenu">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :class="{ active: isActive('/technology') }" to="/technology" @click="closeMenu">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :class="{ active: isActive('/products') }" to="/shop" @click="closeMenu">Products</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :class="{ active: isActive('/technology') }" to="/technology" @click="closeMenu">Technology</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :class="{ active: isActive('/contact') }" to="/contact" @click="closeMenu">Contact</nuxt-link>
            </li>
          </ul>

          <!-- CTA-кнопка -->
          <nuxt-link class="btn btn-primary text-dark cta-btn" to="/shop" @click="closeMenu">Purchase Now</nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Фон хедера */
.header-bg {
  background-image: url('/assets/images/header.png');
  background-size: cover;
  background-position: center;
  height: 100px;
}

/* Логотип */
.navbar-brand {
  display: flex;
  align-items: center;
}
.navbar-brand img {
  height: 50px;
  width: auto;
}

/* Стили навигации */
.nav-link {
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  font-family: 'MazzardH-SemiBold', sans-serif;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #0B6E4F;
}
.nav-link.active {
  color: #ffffff;
}

/* Кнопка */
.btn-primary {
  background-color: #ffffff;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  font-family: 'MazzardH-SemiBold', sans-serif;
}
.btn-primary:hover {
  background-color: #107a1d;
}

/* Адаптивность */
@media (max-width: 991px) {
  .navbar-collapse.show {
    background-image: url('/assets/images/header.png');
    background-size: cover;
    background-position: center;
    z-index: 100;
    border-radius: 20px;
  }

  .navbar-collapse.show > .cta-btn {
    display: table;
    margin: 1rem auto 1rem;
    
  }

  .navbar-toggler {
  border-color: white;
}
.navbar-toggler-icon {
  background-color: transparent !important;
  border: none;
  background-image: 
    linear-gradient(white, white),
    linear-gradient(white, white),
    linear-gradient(white, white);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: top, center, bottom;
}

.navbar-collapse.show .navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

}
</style>









*/


  