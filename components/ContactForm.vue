<template>
  <section id="form" class="container py-5">
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
  </section>
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
#form {
  max-width: 600px;
  margin: 0 auto;
}
.text-success {
  color: #28a745;
}
.text-danger {
  color: #dc3545;
}
.custom-btn {
  background-color: #0b75cd;
  border-color: #0b75cd;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.custom-btn:hover {
  background-color: #085a9c;
  border-color: #085a9c;
}
</style>



