<template>
    <header class="header-bg">
      <nav class="navbar navbar-expand-lg"> <!-- Header Color -->
        <div class="container">
          <!-- Logo -->
          <nuxt-link class="navbar-brand" to="/">
  <img src="/assets/images/logo.png" alt="Carbon Nurture Logo" />
</nuxt-link>

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
                <nuxt-link class="nav-link" :class="{ active: isActive('/about') }" to="/technology">About</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: isActive('/products') }" to="/shop">Products</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: isActive('/technology') }" to="/technology">Technology</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: isActive('/contact') }" to="/contact">Contact</nuxt-link>
              </li>
            </ul>
            <!-- CTA Button -->
            <nuxt-link class="btn btn-primary text-dark" to="/shop">Purchase Now</nuxt-link>
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
  /* Header Styles */
.header-bg {
  background-image: url('/assets/images/header.png'); /*  путь к изображению */
  background-size: cover;
  background-position: center;
  height: 100px; 
}

  /* Logo Styles */
  .navbar-brand {
  display: flex;
  align-items: center;
}
  .navbar-brand img {
  height: 50px; 
  width: auto;  /* Автоматическая ширина для пропорционального масштабирования */
}

 /* Navigation Link Styles */
 .nav-link {
  color: #ffffff; /* Link Color */
  font-weight: 500; /* Полужирный текст */
  font-size: 18px;
  font-family: 'MazzardH-SemiBold', sans-serif; 
  transition: color 0.3s ease;
}



.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px; /*  высота совпадает с высотой шапки */
}
  .nav-link:hover {
    color: #0B6E4F; /* Hover Color */
  }
  .nav-link.active {
   
    color: #ffffff; /* Active Color */
  }
  
  /* Button Styles */
  .btn-primary {
    background-color: #ffffff; /* Custom Button Color */
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 30px;
    font-weight: 500; 
  font-size: 18px;
  font-family: 'MazzardH-SemiBold', sans-serif; 
  }
  .btn-primary:hover {
    background-color: #19B97C; /* Darker Shade on Hover */
  }
  </style>
  