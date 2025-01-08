<template>

<div class="custom-container">
    <section id="hero" class="">
      <div class="content-wrapper ">
        
        <!-- Левый блок с текстом -->
        <div class="text-container">
    <h2 class="hero-heading">Nurture your soil <br>and bank account:</h2>
    <p class="hero-description">biodegradable mulch film you can <br> leave at the end of the season.</p>
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
  margin: 0px auto;
  
}

/* Фоновая секция */
/* Фоновая секция */
#hero {
  background-image: url('/assets/images/baner.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 77vh;
  align-items: flex-end; /* Контент выравнивается по нижнему краю */
}


/* Контейнер для контента */
.content-wrapper {
  width: 100%; /* Контейнер на всю ширину */
  max-width: 1150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* Контент выравнивается по низу */
  margin: 0 auto;
  padding:87px 20px; /* Отступы по бокам */
}

/* Контейнер текста */
.text-container {
  text-align: left; /* Текст слева */
  margin-bottom: 20px; /* Отступ снизу */
}

/* Контейнер кнопки */
.btn-container {
  text-align: right; /* Кнопка справа */
  margin-bottom: 20px; /* Отступ снизу */
}








/* Button Styles */
.btn-primary {
  background-color: #ffffff; /* Custom Button Color */
  border: none;

  border-radius: 40px;
  font-weight: 500;
  
  font-family: 'MazzardH-SemiBold', sans-serif;
}



 /* шрифт */

.text-white {
  color: white !important;
}
  
.hero-heading {
  color: white;
  font-size: 4rem; /* Пример размера шрифта */
  font-weight: bold;
}

.hero-description {
  color: white;
  font-size: 2rem; /* Пример размера шрифта */
  font-style: italic;
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

  body {
  font-family: 'MazzardH-SemiBold', sans-serif;
}
  </style>
  