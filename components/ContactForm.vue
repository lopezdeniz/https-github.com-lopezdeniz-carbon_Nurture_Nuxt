<template>
   <div class="container-fluid">
  <section id="form" class="position-relative">
    <h3 class="contact-title text-center ">Contact Us</h3>

    <!-- Фоновое изображение -->
    <img src="/assets/images/contactBaner.jpg" class="img-fluid w-100 banner-img" alt="Background Image">

    <!-- Контейнер формы (размещается в левой части) -->
    <div class="form-overlay">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            v-model="formData.name"
            type="text"
            class="form-control"
            id="name"
            placeholder="Your name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="formData.email"
            type="email"
            class="form-control"
            id="email"
            placeholder="Your email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea
            v-model="formData.message"
            class="form-control"
            id="message"
            rows="3"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button 
            type="submit" 
            class="btn btn-primary custom-btn" 
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? "Sending..." : "Send" }}
          </button>
        </div>
      </form>

      <!-- Центрирование сообщения -->
      <div v-if="responseMessage" class="d-flex justify-content-center mt-3">
        <div :class="{ 'text-success': isSuccess, 'text-danger': !isSuccess }">
          {{ responseMessage }}
        </div>
      </div>
    </div>
  </section>
</div>
<div class="contact-info">
    <p>contact@carbonnurture.com</p>
    <p>
      Laboratory located in Massachusetts<br>
      Manufactured in North Carolina 115 Morrison Ave, Thomasville, NC 27360
    </p>
    <p>
      <a href="tel:+12223334567" class="cell-contact">+1 222-333-4567</a>
    </p>
  </div>
</template>




<script>
export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
        formType: "contact",
      },
      responseMessage: "",
      isSuccess: false,
      isSubmitting: false, // Переменная для отслеживания отправки
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true; // Блокируем кнопку при отправке
      try {
        const response = await fetch("/api/form-handler", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        });

        const result = await response.json();

        if (result.success) {
          this.responseMessage = "Message sent successfully!";
          this.isSuccess = true;
          this.resetForm();
        } else {
          this.responseMessage = result.error || "Error while sending.";
          this.isSuccess = false;
        }
      } catch (error) {
        this.responseMessage = "Connection error with the server.";
        this.isSuccess = false;
        console.error(error);
      } finally {
        this.isSubmitting = false; // Разблокируем кнопку после отправки
      }
    },
    resetForm() {
      this.formData = { name: "", email: "", message: "", formType: "contact" };
    },
  },
};
</script>

<style scoped>
.cell-contact{
  text-decoration: none;
  color: black;
}
.contact-info {
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin: 20px;
 
}
/* Контейнер секции */
#form {
  position: relative;
  width: 100%;
}

/* Фоновое изображение */
.banner-img {
  width: 100%;
  height: 70vh;
}

/* Контейнер формы (размещение в левой части изображения) */
.form-overlay {
  position: absolute;
  top: 50%;
  left: 20%; /* Отступ слева */
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9); /* Полупрозрачный фон */

  border-radius: 10px;
  width: 50%;
  max-width: 400px;
}

/* Кастомная кнопка */
.custom-btn {
  background-color: #107a1d; /* Зеленый цвет */
  border-color: #107a1d;
  padding: 8px 50px;
  border-radius: 30px;
}

.custom-btn:hover {
  background-color: #19B97C;
  border-color: #19B97C;
}
.container-fluid {
  max-width: 1065px;
  margin: 0 auto; /* Центрирует контейнер */
}

.contact-title {
  position: absolute;
  top: 10%; /* Регулирует отступ сверху */
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem; /* Размер шрифта */
  font-weight: 500;
  z-index: 10; /* Чтобы было поверх изображения */
}

/* Адаптивность */
@media (max-width: 768px) {
  .form-overlay {
    width: 80%;
    left: 50%;
    transform: translate(-50%, -50%); /* Центрируем форму на мобильных */
  }
}

@media (max-width: 963px) {
.banner-img {
  display: none;
}
.form-overlay {
    position: relative; /* Отмена абсолютного позиционирования */
    top: auto;
    left: auto;
    transform: none;
    margin: 20px auto; /* Центрирование по горизонтали с отступом сверху/снизу */
  }
  .contact-title {
    position: relative; /* Сбрасываем абсолютное позиционирование */
    top: auto;
    left: auto;
    transform: none;
    margin: 20px 0; /* Отступ сверху и снизу */
    text-align: center;
  }




  /* Делает ссылку на телефон визуально понятнее */
  .contact-info a {
    color: #107a1d;
    text-decoration: none;
  }
  .contact-info a:hover {
    text-decoration: underline;
  }



}


</style>



