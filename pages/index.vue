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
<nuxt-link class="btn btn-primary text-dark btn-lg custom-btn" :to="'/shop'">Purchase Now</nuxt-link>
</div>
  
    </section>
  </div>



<!-- Банер со стрелкой -->
<div class="container position-relative p-0">
  <!-- Фон с изображением и стрелкой -->
  <img src="/assets/images/arrow2.png" class="img-fluid w-100" alt="Background Image">

  
  
</div>
<!-- Банер со стрелкой -->
<section  class="container ">
  <h2 class="text-secondary mb-5">WHAT CARBON NURTURE  — <span class="text-dark">CAN DO FOR YOU?</span></h2>
</section>
  
   
  
  
  
      <!-- Pricing section -->
    <!-- Pricing section -->
<section id="pricing" class="container py-5">
  <div class="row align-items-stretch"> <!-- align-items-stretch заставит все карточки быть одинаковыми -->
    <!-- Small Package -->
    <div class="col-md-4 mb-4">
      <div class="card h-100 position-relative shadow-hover">
        <img src="/assets/images/card-img1.jpg" class="card-img-top rounded-top" alt="Small Package" />
        <div class="card-body d-flex flex-column"> <!-- Flexbox для выравнивания -->
          <h5 class="card-title text-center">Healthy Soil</h5>
          <p class="card-text text-center flex-grow-1">Soil Enrichment: Returning organic carbon and micronutrients back to the soil after degradation.</p>
        </div>
      </div>
    </div>

    <!-- Medium Package (Recommended) -->
    <div class="col-md-4 mb-4">
      <div class="card h-100 position-relative shadow-hover">
        <img src="/assets/images/card-img3.jpg" class="card-img-top rounded-top" alt="Small Package" />
        <div class="card-body d-flex flex-column"> <!-- Flexbox для выравнивания -->
          <h5 class="card-title text-center">Time and money savings</h5>
          <p class="card-text text-center flex-grow-1">Cost and time savings: remove pickup, hauling, and disposal expenses to optimize your resources.</p>
        </div>
      </div>
    </div>

    <!-- Large Package -->
    <div class="col-md-4 mb-4">
      <div class="card h-100 position-relative shadow-hover">
        <img src="/assets/images/card-img2.jpg" class="card-img-top rounded-top" alt="Large Package" />
        <div class="card-body d-flex flex-column"> <!-- Flexbox для выравнивания -->
          <h5 class="card-title text-center">Personalized Solutions</h5>
          <p class="card-text text-center flex-grow-1">Reducing Carbon Footprint: Decreasing fuel and waste from removing film and hauling while also increasing soil carbon sequestration.</p>
        </div>
      </div>
    </div>
  </div>
</section>

 <!-- Pricing section -->
      
      <div class="container text-center my-5">
  <div class="d-flex align-items-center justify-content-between">
   <h4>We believe in the power of small changes to make a big impact. 
By choosing Carbon Nurture, you are supporting a greener future and contributing to a healthier planet 
for generations to come.</h4>
  </div>
</div>

<div class="d-flex align-items-center justify-content-center my-4">
  <div class="call-btn d-flex align-items-center">
    <!-- Левая часть с текстом -->
    <div class="d-flex align-items-center px-3">
      <i class="bi bi-telephone-forward me-2 text-white fs-3"></i> 
      <span class="text-white">Try our product now: <strong>+1 222-333-4567</strong></span>
    </div>

    <!-- Кнопка "Call now" -->
    <a href="tel:+12223334567" class="call-action">
      Call now <i class="bi bi-arrow-right-circle ms-1 fs-3"></i>
    </a>
  </div>
</div>

<br>
<br>

  <!-- банер с иконками -->


  <div class="container position-relative p-0">
  <!-- Фон с изображением и стрелкой -->
  <img src="/assets/images/icon-baner.png" class="img-fluid w-100" alt="Background Image">

  <!-- Контейнер кнопки, расположенный ниже центра -->
  <div class="position-absolute start-50 translate-middle-x" style="top: 65%;">
    <div class="call-btn d-flex align-items-center">
      <!-- Левая часть с текстом -->
      <div class="d-flex align-items-center px-3">
        <span class="text-white">Try our product now: <strong>+1 222-333-4567</strong></span>
      </div>

      <!-- Кнопка "Call now" -->
      <a href="tel:+12223334567" class="call-action2">
        <i class="bi bi-telephone-forward me-2 fs-4"></i>
        Call now 
      </a>
    </div>
  </div>
</div>

 <!-- банер с иконками -->

 <div class="container position-relative p-0">
  <!-- Фон с изображением -->
  <img src="/assets/images/tabl.png" class="img-fluid w-100" alt="Background Image">

  <!-- Текстовый блок в верхнем правом углу с зеленой полосой -->
  <div class="position-absolute top-0 end-0 text-start custom-text-box">
    <div class="text-content">
      <h3 class="text-success fw-bold">Are you a wholesale customer?</h3>
      <a href="/contact" class="text-dark text-decoration-none">We have a solution for you,<br> please contact us. <i class="bi bi-box-arrow-up-right"></i></a>
    </div>
  </div>
</div>















    </template>
    <script setup>
    import "bootstrap-icons/font/bootstrap-icons.css";
    </script>
    <style scoped>
.text-success {
  color: #107a1d !important;


}


  .custom-text-box {
    max-width: 40%; /* Ограничиваем ширину */
    padding: 61px;

  }

  .text-content {
    border-left: 3px solid #107a1d; /* Зеленая полоса */
    padding-left: 15px;
  }

  .bi-box-arrow-up-right {
    font-size: 14px;
  }






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

    .btn-primary:hover  {
      background-color: #19B97C;
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
    
 
    
    .card img {
      max-height: 200px; /* Ограничение высоты изображения */
      object-fit: cover;
    }

    .card-footer {
  background-color: #ffffff; /* Белый фон */

}

.btn-success {
  background-color: #218838 !important; 
  border-color: #218838 !important;    
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


/* Большая кнопка  */
.call-btn {
    background-color: #107a1d; 
    border-radius: 50px;
    padding: 1px 3px;
    display: flex;
    align-items: center;
  }

  .call-action {
    background: white;
    color: #107a1d;
    border-radius: 50px;
    padding: 1px 17px;
    font-weight: bold;
    text-decoration: none;
    margin-left: 4px;
    display: flex;
    align-items: center;
    border: 2px solid #107a1d;
  }
.call-action2{
  background: white;
    color: #107a1d;
    border-radius: 50px;
    padding: 5px 17px;
    font-weight: bold;
    text-decoration: none;
    margin-left: 4px;
    display: flex;
    align-items: center;
    border: 2px solid #107a1d;
}

  .call-action:hover {
    background: #19B97C;
    color: white;
  }

  .call-action2:hover {
    background: #19B97C;
    color: white;
  }

  .fas {
    font-size: 18px;
  }
/* большая кнопка  */




/* media  */
@media (max-width: 2560px) {
  /* CSS-правила для 2K экранов */
}
@media (max-width: 1920px) {
  /* CSS-правила для стандартных 1080p мониторов */
}
@media (max-width: 1440px) {
  /* CSS-правила для больших ноутбуков и мониторов */
}
@media (max-width: 1200px) {
  /* CSS-правила для стандартных ноутбуков и небольших мониторов */
}
@media (max-width: 1024px) {
  /* CSS-правила для небольших ноутбуков и десктопов */
}
@media (max-width: 991px) {
  .btn-primary {
     padding: 8px 11px;
    }
    .arrow-right {
width: 20px;
height: 20px;
    }

    .content-wrapper{
padding: 0px;
    }
}



@media (max-width: 768px) {
      .card {
        margin-bottom: 20px;
      }
    }
  
    body {
    font-family: 'MazzardH-SemiBold', sans-serif;
  }


  @media (max-width: 600px) {
 
}
@media (max-width: 425px) {

}

@media (max-width: 375px) {

}
@media (max-width: 320px) {

}








  /* media  */
    </style>
    