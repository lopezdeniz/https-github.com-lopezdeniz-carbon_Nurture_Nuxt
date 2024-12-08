<template>
    <header>
      <nav class="navbar navbar-expand-lg" style="background-color: #00BFB2;"> <!-- Header Color -->
        <div class="container">
          <!-- Logo -->
          <nuxt-link class="navbar-brand text-uppercase" to="/">Carbon Nurture</nuxt-link>
          <!-- Toggle Button for Mobile -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Navigation Links -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: isActive('/') }" to="/">Home</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: isActive('/about') }" to="/about">About</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: isActive('/products') }" to="/products">Products</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: isActive('/technology') }" to="/technology">Technology</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: isActive('/contact') }" to="/contact">Contact</nuxt-link>
              </li>
            </ul>
            <!-- CTA Button -->
            <nuxt-link class="btn btn-primary" to="/purchase">Purchase Now</nuxt-link>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "PageHeader",
    methods: {
      isActive(path) {
        return this.$route.path === path; // Проверяем, является ли текущий маршрут активным
      },
    },
  };
  </script>
  
  <style scoped>
  /* Logo Styles */
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000000; /* Logo Color */
  }
  .navbar-brand:hover {
    color: #f8f9fa; /* Lighter Shade on Hover */
  }
  
  /* Navigation Link Styles */
  .nav-link {
    color: #000000; /* Link Color */
    font-weight: 500;
    transition: color 0.3s ease;
  }
  .nav-link:hover {
    color: #0B6E4F; /* Hover Color */
  }
  .nav-link.active {
    font-weight: bold;
    color: #000000; /* Active Color */
  }
  
  /* Button Styles */
  .btn-primary {
    background-color: #0B75CD; /* Custom Button Color */
    border: none;
    font-weight: bold;
    padding: 0.5rem 1rem;
  }
  .btn-primary:hover {
    background-color: #0056b3; /* Darker Shade on Hover */
  }
  </style>
  