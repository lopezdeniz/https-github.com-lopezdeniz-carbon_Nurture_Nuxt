<template>
  <footer class="footer-03">
    <div class="container">
      <img src="/assets/images/sing.png" alt="Shop Icon" class="shop-icon">
      <div class="row">
        <div class="col-md-6">
  <div class="row">
    <div class="col-3 col-md-3 mb-4">
      <h2 class="footer-heading">Shop</h2>
      <ul class="list-unstyled">
        <li><a href="/shop" class="py-1 d-block">Products</a></li>
        <li><a href="/shop" class="py-1 d-block">Special Offers</a></li>
      </ul>
    </div>
    
    <div class="col-3 col-md-3 mb-4">
      <h2 class="footer-heading">About</h2>
      <ul class="list-unstyled">
        <li><a href="/technology" class="py-1 d-block">Technology</a></li>
      </ul>
    </div>
    
    <div class="col-3 col-md-3 mb-4">
      <h2 class="footer-heading">Legal</h2>
      <ul class="list-unstyled">
        <li><a href="/faq" class="py-1 d-block">Terms & Conditions</a></li>
        <li><a href="/faq" class="py-1 d-block">Privacy Policy</a></li>
        <li><a href="/faq" class="py-1 d-block">Refund Policy</a></li>
      </ul>
    </div>
    
    <div class="col-3 col-md-3 mb-4">
      <h2 class="footer-heading">FAQ</h2>
      <ul class="list-unstyled">
        <li><a href="/faq" class="py-1 d-block">Questions FAQ</a></li>
      </ul>
    </div>
  </div>
</div>

        <div class="col-md-6">
          <div class="row justify-content-end">
            <div class="col-md-12 col-lg-11 mb-md-0 mb-4">
              <h2 class="footer-heading">Follow Us</h2>
              <ul class="ftco-footer-social p-0">
  <li class="ftco-animate">
    <a href="#" title="Facebook">
      <i class="bi bi-facebook social-icon"></i> <!-- Исправлено -->
    </a>
  </li>
  <li class="ftco-animate">
    <a href="#" title="LinkedIn">
      <i class="bi bi-linkedin social-icon"></i> <!-- Исправлено -->
    </a>
  </li>
</ul>

              <h2 class="footer-heading mt-5">Subscribe Us</h2>
              <form @submit.prevent="submitSubscription" class="subscribe-form">
  <div class="form-group d-flex">
    <input
      v-model="formData.email"
      type="email"
      class="form-control rounded-left"
      placeholder="Enter email address"
      required
    />
    <input 
      type="submit" 
      :value="isSubmitting ? 'Sending...' : 'Subscribe'" 
      class="form-control submit px-3 rounded-right btn btn-success" 
      :disabled="isSubmitting"
    />
  </div>
</form>

<div v-if="responseMessage" :class="{ 'text-success': isSuccess, 'text-danger': !isSuccess }" class="mt-3">
  {{ responseMessage }}
</div>

            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 pt-4 border-top justify-content-center text-center">
        <div class="col-6">
         
          
          <p class="mb-2 text-start">
           Laboratory located in Massachusetts 
              Manufactured in North Carolina 115 Morrison Ave, Thomasville, NC 27360
          </p>
         
        </div>
        <div class="col-6">
          <p class="mb-2">
            Copyright &copy; {{ currentYear }} All rights reserved
          </p>
          
          <p class="mb-2">
            <strong>Carbon Nurture</strong>
          </p>
          <p class="mb-2">
            Created by <a href="https://github.com/lopezdeniz" target="_blank">LopezDeniz</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      formData: {
        email: "",
        formType: "subscription",
      },
      responseMessage: "",
      isSuccess: false,
      isSubmitting: false, // Новый флаг для отслеживания состояния отправки
    };
  },
  methods: {
    async submitSubscription() {
      this.isSubmitting = true; // Устанавливаем флаг отправки
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
          this.responseMessage = "Subscription successful!";
          this.isSuccess = true;
          this.formData.email = ""; // Сбросить email поле
        } else {
          this.responseMessage = result.error || "Error occurred while subscribing.";
          this.isSuccess = false;
        }
      } catch (error) {
        this.responseMessage = "Failed to connect to the server.";
        this.isSuccess = false;
        console.error("Error in subscription:", error);
      } finally {
        this.isSubmitting = false; // Сбрасываем флаг отправки
      }
    },
  },
};
</script>
<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<style scoped>
.submit {
  background-color: #218838 !important;  /* Зеленый цвет из Bootstrap (btn-success) */
  border-color: #218838 !important;
  border-radius: 40px !important;  /* Округлые углы */
  padding: 12px 30px !important;  /* Увеличиваем отступы для округлой формы */
  font-size: 16px !important;  /* Размер текста */
}

.submit:hover {
  background-color: #218838 !important;  /* Темно-зеленый цвет при наведении (btn-success hover) */
  border-color: #1e7e34 !important;
}
.form-group {
  display: flex;
  align-items: center; /* Центрирование по вертикали */
  gap: 10px; /* Добавление промежутка между полем ввода и кнопкой */
}





.footer-03 {
  background: #f8f9fa;
  padding: 4rem 0;
}
.footer-heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-unstyled li a {
  color: #343a40;
  text-decoration: none;
}
.list-unstyled li a:hover {
  text-decoration: underline;
}
.ftco-footer-social {
  list-style: none;
  padding: 0;
  display: flex;
}
.ftco-footer-social li {
  margin-right: 15px;
}
.ftco-footer-social li a {
  display: inline-block;
  transition: transform 0.2s, color 0.2s;
}
.ftco-footer-social li a:hover {
  color: #007bff;
  transform: scale(1.2);
}
.social-icon {
  font-size: 2rem;
  color: #000000;
}
.social-icon:hover {
  color: #14de17;
}
.subscribe-form .form-control {
  border: 1px solid #ced4da;
}
.subscribe-form .form-control.submit {
  background: #0B75CD;
  color: #fff;
  border: none;
}
.subscribe-form .form-control.submit:hover {
  background: #64b1ef;
}
.text-success {
  color: #28a745;
}
.text-danger {
  color: #dc3545;
}
.border-top {
  border-top: 1px solid #dee2e6 !important;
}



.shop-icon {
  width: 40px; /* Регулируйте размер */
  height: auto;
  display: block;
 margin-bottom: 2%;

}

.footer-03[data-v-3506faf6] {
    padding: 2rem 0;
}

</style>
