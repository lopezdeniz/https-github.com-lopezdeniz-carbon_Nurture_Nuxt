<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Левая часть (30%) с изображением -->
      <div class="col-md-4 col-12 p-0">
        <div class="image-container">
          <img src="/assets/images/Technology.png" class="img-fluid" alt="Technology Image">
        </div>
      </div>

      <!-- Правая часть (70%) с контентом -->
      <div class="col-md-8 col-12 d-flex align-items-center justify-content-center">
        <div class="content-box">
         
          <div class="row justify-content-center text-center gx-5 ">
            <!-- Иконка 1 -->
            <div class="col-md-3 col-6">
              <img src="/assets/images/icon1.png" alt="Non-Toxic Natural Minerals" class="icon-img">
              <p class="icon-text">Non-Toxic<br>Natural Minerals</p>
            </div>

            <!-- Плюс -->
            <div class="col-md-1 col-2 align-self-center">
              <h1 class="math-symbol">+</h1>
            </div>

            <!-- Иконка 2 -->
            <div class="col-md-3 col-6">
              <img src="/assets/images/icon2.png" alt="Conventional polymers" class="icon-img">
              <p class="icon-text">Conventional<br>polymers</p>
            </div>

            <!-- Равно -->
            <div class="col-md-1 col-2 align-self-center">
              <h1 class="math-symbol">=</h1>
            </div>

            <!-- Иконка 3 -->
            <div class="col-md-3 col-6">
              <img src="/assets/images/icon3.png" alt="Carbon Nurture mulch film" class="icon-img">
              <p class="icon-text">Carbon Nurture<br>mulch film</p>
            </div>
          </div>
<br>
          <!-- Описание снизу -->
          <div class="row justify-content-center mt-4">
            <div class="col-md-8">
              <div class="description-box text-start">
                <p>Controlled onset and rate of degradation <br>
                (1 month - 2 years) <br>
                Patented technology <br>
                Degrades in natural environment <br>
                No microplastic after complete biodegradation</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
<br>
   <!-- about -->
   <div class="container-fluid position-relative p-0">
    <h2 class="text-dark text-center">ABOUT US</h2>

    <!-- Фон баннера -->
    <img src="/assets/images/aboutusBaner.png" class="img-fluid w-100 banner-img" alt="Background Image">

    <!-- Контейнер с контентом (2 вертикальные колонки) -->
    <div class="position-absolute top-50 start-50 translate-middle w-100">
        <div class="container">
            <div class="row">
                <!-- Левая колонка (2 иконки) -->
                <div class="col-md-6 col-12 d-flex flex-column align-items-center">
                    <div class="icon-box text-center">
                        <img src="/assets/images/icon4.png" alt="Icon 1" class="icon-img2">
                        <p class="icon-text text-start">Carbon Nurture has developed environmentally biodegradable plastics to support manufacturing of sustainable materials and regenerative economy. Our technology helps re-generating healthy soils and oceans to strengthen food chains and to re-create natural reserves.</p>
                    </div>
                    <div class="icon-box text-center mt-4">
                        <img src="/assets/images/icon5.png" alt="Icon 2" class="icon-img2">
                        <p class="icon-text text-start">Soil-biodegradable products developed by CN help mitigating climate change by reducing carbon dioxide emissions due to sequestering carbon in soil and sediments. Environmentally biodegradable plastics are designed for specific applications with required servicelife characteristics and properties.</p>
                    </div>
                </div>

                <!-- Правая колонка (2 иконки) -->
                <div class="col-md-6 col-12 d-flex flex-column align-items-center">
                    <div class="icon-box text-center">
                        <img src="/assets/images/icon6.png" alt="Icon 3" class="icon-img2">
                        <p class="icon-text text-start">At their end-of-life they could be recycled biologically, physically or chemically. Biological recycling is designed to take place at natural environmental conditions and does not require high temperature composting infrastructure.</p>
                    </div>
                    <div class="icon-box text-center mt-4">
                        <img src="/assets/images/icon7.png" alt="Icon 4" class="icon-img2">
                        <p class="icon-text text-start">The abiotic degradation is achieved by specially designed advanced redox-promoting catalyst, leading to complete conversion of polymers into biodegradable substances with high carbon utilization. Complete conversion prevents formation of persistent micro/nano-plastics.</p>
                    </div>
                </div>
            </div>

            <!-- Блок STANDARDS с зеленой линией справа -->
            <div class="row justify-content-center mt-5">
                <div class="col-md-8">
                    <div class="standards-box">
                        <p class="standards-text">
                            <strong>STANDARDS:</strong> 100% biodegradable per ASTM D6954, 5988 and EN17033 with exposure.
                            Passes all soil toxicity tests - plants germination and growth per OECD208, earthworms acute toxicity per OECD 207, luminescent bacteria EN ISO 11348-3:2019, freshwater OECD test No. 202 or 211.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Текст и флаг в правом нижнем углу баннера -->
    <div class="banner-info">
        <p class="banner-text text-start">
            Carbon Nurture is a US company <br>
            with all research and manufacturing <br>
            facilities located in the US.
        </p>
        <img src="/assets/images/usa.png" alt="USA Flag" class="flag-img">
    </div>
</div>







</div>










 <!-- about -->














</template>



<script setup>
// Устанавливаем мета-данные для страницы
definePageMeta({
  title: "Technology - Carbon Nurture",
  meta: [
    {
      name: "description",
      content: "Explore advanced technologies for sustainable living and eco-friendly solutions.",
    },
    {
      name: "keywords",
      content: "sustainable technology, eco-friendly, carbon nurture, green solutions",
    },
    {
      property: "og:title",
      content: "Technology - Carbon Nurture",
    },
    {
      property: "og:description",
      content: "Discover cutting-edge sustainable technologies to help nurture your carbon footprint.",
    },
    {
      property: "og:image",
      content: "https://example.com/og-image-technology.jpg",
    },
    {
      property: "og:url",
      content: "https://example.com/technology",
    },
  ],
});
</script>

<style scoped>
.container-fluid {
  max-width: 1800px;
  margin: 0 auto; /* Центрирует контейнер */
}

/* Стили для страницы Technology */
.image-container {
  width: 100%;
  max-height: 70vh; /* Максимальная высота 70% экрана */
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: auto; /* Убираем фиксированную высоту */
  object-fit: contain; /* Уменьшает изображение пропорционально, без обрезки */
}


.content-box {
  max-width: 80%;
  text-align: center;
}

.icon-img {
  width: 80px; /* Регулируемый размер иконок */
  height: auto;
  display: block;
  margin: 0 auto 25px;
}

.icon-text {
  font-size: 16px;
  font-weight: 500;
}

.math-symbol {
  font-size: 40px;
  font-weight: bold;
}

.description-box {
  border-left: 3px solid #107a1d;
  padding-left: 15px;
  font-size: clamp(14px, 1.3vw, 16px);
  font-weight: 500;
  line-height: 1.2

}








/* о нас */




.icon-img2 {
  width: 80px; /* Регулируемый размер иконок */
  height: auto;
  display: block;
  margin: 0 auto 25px;
  margin-right: 2%;
}

.icon-box {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
}


.icon-text {
  font-size: 16px;
  font-weight: 500;
  
}

.flag-img {
  width: 100px;
  height: auto;
}

.standards-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 3px solid #107a1d; /* Зелёная линия справа */
  padding-left: 15px; /* Отступ между текстом и линией */
  min-height: 80px ;/* Минимальная высота */
  
}

.standards-text {
  font-size: 18px;
  font-weight: 600;
  color: #107a1d; /* Зелёный цвет текста */
  line-height: 1.5;
  max-width: 90%;
}


.flag-icon-banner {
  position: absolute;
  bottom: 20px; /* Отступ от нижнего края баннера */
  right: 40px; /* Отступ от правого края */
  z-index: 10; /* Убедимся, что флаг находится поверх контента */
}

.flag-img {
  width: 150px; /* Размер иконки */
  height: auto;
}

/* Контейнер для текста и флага */
.banner-info {
  position: absolute;
  bottom: 30px; /* Отступ от нижнего края баннера */
  right: 40px; /* Отступ от правого края */
  display: flex;
  align-items: center;
  gap: 20px; /* Отступ между текстом и флагом */
  z-index: 10; /* Флаг и текст поверх контента */
}

/* Стиль текста */
.banner-text {
  font-size: 12px;
  font-weight: 600;
  color: black;
  text-align: right;
  line-height: 1.2
}

/* Стиль флага */



/* о нас */
</style>


