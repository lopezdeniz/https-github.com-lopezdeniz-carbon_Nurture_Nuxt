<template>

<div class="custom-container">
    <section id="hero">
      <!-- Десктопная версия (по умолчанию) -->
      <div class="desktop-hero">
        <img src="/assets/images/baner3.png" alt="Hero Image" class="hero-image">
        <div class="content-wrapper">
          <div class="arrow arrow-right"></div>
          <nuxt-link class="btn btn-primary text-dark btn-lg custom-btn" :to="'/shop'">Purchase Now</nuxt-link>
        </div>
      </div>

      <!-- Новая мобильная версия (только для экранов ≤ 768px) -->
      <div class="mobile-hero">
  <!-- Картинка -->
  <div class="image-container">
    <img src="/assets/images/mobail-baner.png" alt="Mobile Hero Image" class="mobile-hero-image">
    
    <!-- Кнопка в центре -->
    <nuxt-link class="btn btn-primary text-dark btn-lg custom-btn" :to="'/shop'">Purchase Now</nuxt-link>
  </div>
</div>

    </section>
 
  </div>
<!-- Новая мобильная версия (только для экранов ≤ 768px) -->
  <div class="container">
  <h2 class="text-secondary  textbearrow">THE BIG PROBLEMS <br>  <span class="text-dark">WE SOLVE</span></h2>
  </div>
<!-- Банер со стрелкой -->
<div class="container position-relative p-0 ">
  <!-- Фон с изображением и стрелкой -->
  <img src="/assets/images/arrow2.png" class="img-fluid w-100 arrow-desctop" alt="Background Image">
 <!-- Новая мобильная версия (только для экранов ≤ 768px) -->
 <img src="/assets/images/arrow3.jpg" class="img-fluid w-100 arrow-mobail" alt="Background Image">
  
</div>
<!-- Банер со стрелкой -->
<section  class="container textw ">
  <h2 class="text-secondary mb-5">WHAT CARBON NURTURE <br> <span class="text-dark">CAN DO FOR YOU?</span></h2>
</section>
<div class="container">
    <h4 class="standards-text text-start">
  STANDARDS: 100% biodegradable per ASTM D6954, 5988 
  and EN17033 with exposure. Passes all soil toxicity tests- 
  plants germination and growth per OECD208, earthworms 
  acute toxicity per OECD 207, luminescent bacteria EN ISO 
  11348-3:2019, freshwater OECD test No. 202 or 211.
</h4>
</div>
   
  
  
  
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
 <!-- desctop btn -->
<div class="d-flex align-items-center justify-content-center my-4 desctop-btn">
  <!-- Вся кнопка теперь является ссылкой -->
  <a href="tel:+12223334567" class="call-btn d-flex align-items-center text-decoration-none">
    <!-- Левая часть с текстом -->
    <div class="d-flex align-items-center px-3">
      <i class="bi bi-telephone-forward me-2 text-white fs-3"></i> 
      <span class="text-white">Try our product now: <strong>+1 222-333-4567</strong></span>
    </div>
    
    <!-- Текст кнопки -->
    <span class="call-action">
      Call now <i class="bi bi-arrow-right-circle ms-1 fs-3"></i>
    </span>
  </a>
</div>
 <!-- mobail btn -->
<div class="d-flex align-items-center justify-content-center my-4 mobail-btn3">
  <!-- Вся кнопка теперь является ссылкой -->
  <a href="tel:+12223334567" class="call-btn2 d-flex align-items-center text-decoration-none">
    <!-- Левая часть с текстом -->
    <div class="d-flex align-items-center px-3">
      <i class="bi bi-telephone-forward me-2 text-white fs-3"></i> 
      <span class="text-white">Try our product now: <strong><br class="mobile-break">+1 222-333-4567</strong></span>
    </div>
    
    <!-- Текст кнопки -->
    <span class="call-action">
      Call now <i class="bi bi-arrow-right-circle ms-1 fs-3"></i>
    </span>
  </a>
</div>


<br>
<br>

  <!-- банер с иконками -->


  <div class="container position-relative p-0 call-btn-act">
  <!-- Фон с изображением и стрелкой -->
  <img src="/assets/images/icon-baner.png" class="img-fluid w-100 icon-baner1" alt="Background Image">
  <!-- Контейнер кнопки, расположенный ниже центра -->
    <!-- Desctop btn-->
  <div class="position-absolute start-50 translate-middle-x" style="top: 65%;">
  <!-- Вся кнопка теперь является ссылкой -->
  <a href="tel:+12223334567" class="call-btn2 d-flex align-items-center text-decoration-none">
    <!-- Левая часть с текстом -->
    <div class="d-flex align-items-center px-3">
      <span class="text-white">Try our product now: <strong><br class="mobile-break">+1 222-333-4567</strong></span>
    </div>

    <!-- Текст кнопки -->
    <span class="call-action2">
      <i class="bi bi-telephone-forward me-2 fs-4"></i>
      Call now
    </span>
  </a>
</div>

</div>
  <!-- Фон с изображением и стрелкой мобильная-->
<div class="container position-relative p-0 call-btn-act2">
  <img src="/assets/images/icon-baner2.jpg" class="img-fluid w-100 icon-baner2" alt="Background Image">
</div>
<!-- кнопка мобильная-->
 <div class="container">
<div class="d-flex align-items-center justify-content-center my-4 mobail-btn ">
  <div class="call-btn3 d-flex align-items-center">
    <!-- Левая часть с текстом -->
    <div class="d-flex align-items-center px-3">
      <i class="bi bi-telephone-forward me-2 text-white fs-3"></i> 
      <span class="text-white">Try our product now: <strong><br>+1 222-333-4567</strong></span>
    </div>

    <!-- Кнопка "Call now" -->
    <a href="tel:+12223334567" class="call-action">
      Call now <i class="bi bi-arrow-right-circle ms-1 fs-3"></i>
    </a>
  </div>
</div>
</div>
 <!-- банер с иконками -->

 <div class="container position-relative p-0 tabl-desctop">
  <!-- Фон с изображением -->
  <img src="/assets/images/tabl.jpg" class="img-fluid w-100" alt="Background Image">

  <!-- Текстовый блок в верхнем правом углу с зеленой полосой -->
  <div class="position-absolute top-0 end-0 text-start custom-text-box">
    <div class="text-content">
      <h3 class="text-success fw-bold">Are you a wholesale customer?</h3>
      <a href="/contact" class="text-dark text-decoration-none">We have a solution for you,<br> please contact us. <i class="bi bi-box-arrow-up-right"></i></a>
    </div>
  </div>
</div>
<div class=" position-relative p-0 tabl-mobail">
  <img src="/assets/images/tabl-mobail.jpg" class="img-fluid w-100" alt="Background Image">
</div>

    </template>
    <script setup>
    import "bootstrap-icons/font/bootstrap-icons.css";
    </script>
    <style scoped>
    .tabl-mobail {
  display: none;
}
    .mobile-break{
      display: none;
    }
.textbearrow {
  display: block;
}    
.desktop-hero {
  display: block;
}
.mobile-hero {
  display: none;
}
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
  align-items: center;
background-color: #107a1d;
border-radius: 50px;
display: flex;
padding: 1px 3px;
}

.call-btn2 {
  align-items: center;
background-color: #107a1d;
border-radius: 50px;
display: flex;
padding: 1px 3px;
}

.call-btn3{
  align-items: center;
background-color: #107a1d;
border-radius: 50px;
display: flex;
padding: 1px 3px;
}
    
  

  /* 📌 Стили для кнопки */
.call-btn3 {
  background-color: #107a1d;
  border-radius: 50px;
  padding: 12px 24px; /* Оптимальное пространство внутри */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* Центрируем кнопку */
  color: #107a1d;
 
  text-decoration: none;
  border: 2px solid #107a1d;
  white-space: nowrap; /* Запрещаем перенос строк */
  width: auto;
  max-width: 100%; /* Запрещаем выход за границы */
  height: 50px;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
  overflow: hidden; /* Гарантируем, что текст не выйдет за границы */
}

/* 📌 Исправленная кнопка */
.call-action {
  background: white;
  color: #107a1d;
  border-radius: 50px;
  padding: 4px 20px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #107a1d;
  white-space: nowrap;
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
 .tabl-desctop {
  display: none;
 }
 .mobile-break {
  display: block;
 }
 .tabl-mobail {
  display: block !important;
}
}
@media (min-width: 1200px) {

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

  .custom-container {
    max-width: 100% !important;
    overflow-x: hidden; /* подстраховка, если что-то всё же вылезет */
  }

  /* Сбрасываем абсолютное позиционирование, чтобы контент не вылезал за границы */
  .content-wrapper {
    position: static;
    bottom: auto;
    right: auto;
    width: auto;
    margin-right: 0;
  }
  
  .card-title {
    font-size: 1.5rem; /* Увеличенный заголовок */
  }

  .card-text {
    font-size: 1.2rem; /* Увеличенный текст */
  }

  .call-btn2 {
align-items: center;
background-color: #107a1d;
border-radius: 50px;
display: flex;
padding: 0px 2px;
}

  .mobail-btn {
    padding-top: 4%;
  }
 
  .textw {
    margin-top: 27px;
  }
  .desctop-btn{
    display: none !important;
  }
.tabl-desctop{
  display: none;
}

.all-btn-act {
  display: none;
}
.call-action2{
  display: none;
}

  .icon-baner1 {
  display: none;
}
  .arrow-desctop {
    display: none;
  }
  .textbearrow {
    display: block; 
    margin-top: 20px;
  }
  .standards-text {
    display: block; /* Показываем текст только на мобильных */
    color: #107a1d; 
    font-size: 1.20rem; /* Размер текста h4 по Bootstrap */
    font-weight: 500; /* Средняя жирность */
    text-align: center; /* Выравнивание текста */
    margin-top: 20px; /* Отступ сверху */
    margin-bottom: 20px;
  }


      .card {
        margin-bottom: 20px;
      }
      .desktop-hero {
    display: none; /* Скрываем старую версию */
  }
  .mobile-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: block;
  }
/* 📌 Контейнер для картинки и кнопки */
.image-container {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 📌 Картинка адаптивная */
  .mobile-hero-image {
    width: 100%;
    height: auto;
    display: block;
  }

  /* 📌 Кнопка поверх картинки, по центру */
  .custom-btn {
    position: absolute;
    top: 80%; /* Центрируем кнопку по умолчанию */
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px 30px;
    font-size: 16px;
    background-color: white;
    color: #107a1d;
    border-radius: 30px;
    text-align: center;
    font-weight: bold;
   
    transition: 0.3s ease-in-out;
  }

  /* 📌 Эффект наведения */
  .custom-btn:hover {
    background-color: #107a1d;
    color: white;
  }
.tabl-mobail {
  padding-top: 4% !important;
}

    }
  
    body {
    font-family: 'MazzardH-SemiBold', sans-serif;
  }

  @media (min-width: 769px) {
    .mobail-btn3 {
      display: none !important;
    }


    .mobail-btn{
      display: none !important;
    }
  .standards-text {
    display: none;
  }
  .arrow-mobail{
    display: none;
  }
  .textbearrow{
    display: none;
  }
  .icon-baner2 {
  display: none;
}
.call-btn-act2 {
  display: none;
}




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
    