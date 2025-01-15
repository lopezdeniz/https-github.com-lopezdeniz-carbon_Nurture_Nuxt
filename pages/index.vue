<template>

  <div class="custom-container">
    <section id="hero">
  
      <!-- Картинка -->
      <img src="/assets/images/baner3.png" alt="Hero Image" class="hero-image">
  
      <!-- Обертка с текстом и кнопкой -->
      <div class="content-wrapper">
<!-- Стрелка слева от кнопки -->
<div class="arrow arrow-right"></div>

<!-- Правый блок с кнопкой -->
<nuxt-link class="btn btn-primary text-dark btn-lg custom-btn" :to="'/products'">Purchase Now</nuxt-link>
</div>
  
    </section>
  </div>
  
   
  
  
  
      <!-- Pricing section -->
      <section id="pricing" class="container py-5">
        <h2 class="text-center mb-5">YOUR FARM DESERVES THE BEST — <span class="text-secondary">NO MORE COMPROMISES</span></h2>

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
              </div>
              <div class="card-footer text-center">
          <nuxt-link class="btn btn-success btn-lg" :to="'/products'">Select Plan</nuxt-link>
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
              </div>
              <div class="card-footer text-center">
          <nuxt-link class="btn btn-success btn-lg" :to="'/products'">Select Plan</nuxt-link>
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
              </div>
              <div class="card-footer text-center">
          <nuxt-link class="btn btn-success btn-lg" :to="'/products'">Select Plan</nuxt-link>
        </div>
            </div>
          </div>
        </div>
      </section>

      
      <div class="container text-center my-5">
  <div class="d-flex align-items-center justify-content-between">
    <span class="me-3">3 Steps</span>
    <hr class="flex-grow-1" style="border-top: 2px solid black;"/>
    <span class="mx-3"><h2>THE PLAN</h2></span>
    <hr class="flex-grow-1" style="border-top: 2px solid black;"/>
    <span class="ms-3">Carbon Nurture</span>
  </div>
</div>




<div class="container py-5">
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card no-border-shadow h-100">
        <div class="icon-container">
          <img src="/assets/images/cartIcon.png" class="card-img-top icon-image" alt="Cart Icon">
          <span class="arrow-right1"></span> <!-- Стрелка вправо -->
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card no-border-shadow h-100">
        <div class="icon-container">
          <img src="/assets/images/roleIcon.png" class="card-img-top icon-image" alt="Role Icon">
          <span class="arrow-right1"></span> <!-- Стрелка вправо -->
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card no-border-shadow h-100">
        <div class="icon-container">
          <img src="/assets/images/handIcon.png" class="card-img-top icon-image" alt="Hand Icon">
         
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
  </div>
</div>





    </template>
    
    <style scoped>
  .icon-container {
  position: relative;
}

.arrow-right1 {
  width: 30px; /* Увеличиваем ширину стрелки */
  height: 30px; /* Увеличиваем высоту стрелки */
  border-right: 4px solid #000000; /* Черная стрелка */
  border-top: 4px solid #000000;
  transform: rotate(45deg);
  margin-right: 0; /* Убираем отступ между стрелкой и картинкой */
  align-self: center; /* Выравнивание по центру */
  margin-left: 5px; /* Добавляем небольшой отступ слева от стрелки */
  position: absolute;
  right: -5px; /* Располагаем стрелку справа от картинки */
  top: 50%;
  transform: translateY(-50%) rotate(45deg); /* Центрируем по вертикали */
  cursor: pointer; /* Сделать стрелку кликабельной */

}

  /* Основной контейнер */
  .custom-container {
    max-width: 2000px;
    margin: 0px auto;
    
  }
  
  /* Фоновая секция */
  #hero {
    position: relative;
    width: 100%;
    max-width: 2000px;
    overflow: hidden;
  }
  
  /* Картинка */
  .hero-image {
    width: 100%;
    height: auto;
    display: block;
  }
  
  
  /* Контейнер с текстом и кнопкой */

  .content-wrapper {
  position: absolute;
  bottom: 23%;
  right: 0;
  width: 27%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  margin-right: 10%;
}
  
  
  
  /* Левый текстовый блок */
  .text-container {
    max-width: 60%;
    color: #fff;
  }
  
  /* Правый блок с кнопкой */
  .btn-container {
    display: flex;
    align-items: flex-end;
  }
  
  /* Заголовок */
  .hero-heading {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  /* Описание */
  .hero-description {
    font-size: 3rem;
  }
  
  
  .btn-primary {
      background-color: #ffffff; /* Custom Button Color */
      border: none;
      border-radius: 40px;
      font-weight: 500;
      font-family: 'MazzardH-SemiBold', sans-serif;
      margin: 0 auto;
    }
  
  /* Стрелка слева от кнопки */
.arrow-right {
width: 30px;          /* Увеличиваем ширину стрелки */
height: 30px;         /* Увеличиваем высоту стрелки */
border-right: 4px solid #ffffff;  /* Увеличиваем толщину правой линии */
border-top: 4px solid #ffffff;
transform: rotate(45deg);
margin-right: 0;  /* Убираем отступ между стрелкой и кнопкой */
align-self: center; /* Убедитесь, что стрелка выровнена по центру вертикально */
margin-left: 5px; /* Добавляем небольшой отступ слева от стрелки */
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
      transform: translateY(-20px);
      
  border: 2px solid #28a745; /* Зеленая обводка */
  border-radius: 0.5rem; /* Скругление углов */


    }
    
    .card img {
      max-height: 200px; /* Ограничение высоты изображения */
      object-fit: cover;
    }

    .card-footer {
  background-color: #ffffff; /* Белый фон */

}

    
/* Блок План  */

.icon-image {
  width: 10vw; /* Иконка займет 10% ширины экрана */
  height: auto; /* Сохранение пропорций */
  max-width: 120px; /* Максимальный размер иконки */
  margin: 20px auto;
  display: block;
}

.no-border-shadow {
  text-align: center;
  border: none;
  box-shadow: none;

}

.card-title {
  font-size: 2vw; /* Размер шрифта адаптируется к ширине экрана */

}

.card-text {
  font-size: 1.5vw;

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
    