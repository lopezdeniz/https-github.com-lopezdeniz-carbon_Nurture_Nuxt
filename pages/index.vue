<template>

  <div class="custom-container">
      <section id="hero" class="d-flex justify-content-center align-items-center position-relative">
        <div class="content-wrapper d-flex flex-column flex-md-row justify-content-between align-items-end w-100">
          
          <!-- Левый блок с текстом -->
          <div class="text-container mb-4 mb-md-0">
          
          </div>
          
          <!-- Правый блок с кнопкой -->
          <div class="btn-container">
            <nuxt-link class="btn btn-primary text-dark btn-lg custom-btn" :to="'/products'">PURCHASE NOW</nuxt-link>
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
  
  /* Основной контейнер */
  .custom-container {
    max-width: 2000px;
    margin: auto;
  }
  
  /* Фоновая секция */
  #hero {
    background-image: url('/assets/images/baner2.png');
    background-size: cover;
    background-position: center;
    min-height: 70vh;
    padding: 2rem;
  }
  
  
  
  /* Контейнер для контента */
  .content-wrapper {
    width: 80%; /* Занимает 80% от родителя */
    max-width: 1150px; /* Ограничение максимальной ширины */
    margin: 0 auto; /* Центрирование по горизонтали */
    display: flex;
    flex-direction: column; /* Элементы внутри будут выравниваться в колонку */
    justify-content: flex-end; /* Элементы будут располагаться снизу */
    padding: 0; /* Убираем отступы */
    height: 100%; /* Занимает всю высоту родителя */
    
  }
  
  
  
  
  /* Контейнер текста */
  .text-container {
    max-width: 60%;
    color: white;
    text-align: left;
    
  }
  
  /* Контейнер кнопки */
  .btn-container {
    align-self: flex-end;
  }
  
  
  
  
  
  
  
  
  /* Button Styles */
  .btn-primary {
    background-color: #ffffff; /* Custom Button Color */
    border: none;
    padding: calc(0.7rem * 1.2) calc(2rem * 1.2); /* Увеличиваем отступы на 20% */
    border-radius: 40px;
    font-weight: 500;
    font-size: calc(16px * 1.2); /* Увеличиваем размер шрифта на 20% */
    font-family: 'MazzardH-SemiBold', sans-serif;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  .text-white {
    color: white !important;
  }
    
    
  h2.display-4 {
    font-size: 5rem; /* Увеличиваем шрифт */
    font-weight: 500; /* Устанавливаем жирное начертание */
  }
  
  p.lead {
      font-size: 2rem; /* Увеличиваем шрифт */
      font-weight: 500; /* Устанавливаем жирное начертание */
  
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
    