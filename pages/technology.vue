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
      </div> <!-- Закрываем col-md-8 -->
    </div> <!-- Закрываем row -->
  </div> <!-- Закрываем container-fluid -->
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
  font-size: clamp(14px, 1.3vw, 20px);
  font-weight: 500;
}




</style>


