<template>

  <div class="custom-container">
    <section id="hero" class="d-flex justify-content-center align-items-center position-relative">
      <div class="content-wrapper d-flex justify-content-between w-100">
        <div class="text-container">
          <h2 class="display-4">Start Nurturing Your Carbon Footprint</h2>
          <p class="lead">Join us to explore affordable and sustainable solutions for your business or personal use.</p>
        </div>
  
        <div class="btn-container">
          <nuxt-link class="btn btn-primary btn-lg" :to="'/products'">Learn More</nuxt-link>
        </div>
      </div>
    </section>
  </div>
  
  
  
  
  
      <!-- Pricing section -->
      <section id="pricing" class="container py-5">
        <h2 class="text-center mb-5">Choose Your Plan</h2>
    
        <div class="row align-items-center">
          <!-- Small Package -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 position-relative shadow-hover">
              <img src="https://images.satu.kz/185262414_w640_h640_polietilenovaya-plenka-dlya.jpg" class="card-img-top rounded-top" alt="Small Package" />
              <div class="card-body">
                <h5 class="card-title text-center">Small Package</h5>
                <p class="card-text text-center">Covers X square meters. Perfect for small farms or personal use.</p>
                <p class="text-center price">$50</p>
                <div class="text-center">
                  <nuxt-link class="btn btn-primary" :to="'/products'">View Details</nuxt-link>
                </div>
              </div>
            </div>
          </div>
    
          <!-- Medium Package (Recommended) -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 position-relative shadow-hover recommended-card">
              <img src="https://m.media-amazon.com/images/I/71onNpZe6iL._AC_UL800_QL65_.jpg" class="card-img-top rounded-top" alt="Medium Package" />
              <div class="card-body">
                <h5 class="card-title text-center text-success">Medium Package (Recommended)</h5>
                <p class="card-text text-center">Covers Y square meters. Ideal for medium-sized farms looking for efficiency.</p>
                <p class="text-center price">$100</p>
                <div class="text-center">
                  <nuxt-link class="btn btn-primary" :to="'/products'">View Details</nuxt-link>
                </div>
              </div>
            </div>
          </div>
    
          <!-- Large Package -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 position-relative shadow-hover">
              <img src="https://avatars.mds.yandex.net/i?id=3d766e8115cb32a15a59842f70a1b4a9_l-4135778-images-thumbs&ref=rim&n=13&w=800&h=800" class="card-img-top rounded-top" alt="Large Package" />
              <div class="card-body">
                <h5 class="card-title text-center">Large Package</h5>
                <p class="card-text text-center">Covers Z square meters. Perfect for large-scale agricultural operations.</p>
                <p class="text-center price">$150</p>
                <div class="text-center">
                  <nuxt-link class="btn btn-primary" :to="'/products'">View Details</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
    
    <style scoped>
  
  /* Контейнер шириной 2000px */
  .custom-container {
    max-width: 2000px;
    margin: 0 auto;
  }
  
  /* Секция с фоновым изображением */
  #hero {
    background-image: url('/assets/images/baner.jpg');
    background-size: cover; /* Обновляем для правильного отображения */
    background-position: center; /* Центрируем фоновое изображение */
    background-repeat: no-repeat;
    min-height: 70vh; /* Высота секции адаптируется к экрану */
    padding: 0 2rem 4rem; /* Внутренние отступы, для адаптивности */
    position: relative;
  }
  
  /* Контейнер для текста и кнопки */
  .content-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 80%; /* Ширина обертки */
    max-width: 1000px; /* Ограничиваем максимальную ширину */
    padding: 14rem;
   
  }
  
  /* Текст в левом нижнем углу */
  .text-container {
    position: absolute;
    bottom: 20px; /* Отступ снизу */
    left: 20px; /* Отступ слева */
    color: white;
    text-align: left;
  }
  
  /* Кнопка в правом нижнем углу */
  .btn-container {
    position: absolute;
    bottom: 20px; /* Отступ снизу */
    right: 20px; /* Отступ справа */
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  .text-white {
    color: white !important;
  }
    
    
    
    
    /* Pricing Section */
    #pricing {
      background-color: #ffffff;
      padding: 3rem 0;
    }
    
    .card {
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .card-body {
      padding: 1.5rem;
      flex-grow: 1;
    }
    
    .card-img-top {
      border-radius: 10px 10px 0 0;
    }
    
    .price {
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    .recommended-card {
      transform: translateY(-10px);
    }
    
    .card img {
      max-height: 200px; /* Ограничение высоты изображения */
      object-fit: cover;
    }
    
    @media (max-width: 767px) {
      .card {
        margin-bottom: 20px;
      }
    }
    </style>
    