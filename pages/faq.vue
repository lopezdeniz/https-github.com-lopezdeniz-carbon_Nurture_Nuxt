<script setup>
import { ref } from 'vue';

// Полный список FAQ
const faqs = ref([
  {
    question: "Do you offer a money-back guarantee?",
    answer: "All sales are final, as results depend on soil, climate, and other growing conditions. However, we guarantee that our product will arrive in high-quality condition, ready for installation in your designated field. If you have any concerns, please contact us.",
    open: false
  },
  {
    question: "Is your product oxo-degradable?",
    answer: "No, Carbon Nurture mulch film does not contain oxo-fragmentable additives. Our product nurtures the soil rather than polluting it. Our technology is based on redox reactions, ensuring complete biodegradation. [Read more here.]",
    open: false
  },
  {
    question: "How does crop yield with Carbon Nurture mulch compare to PE mulch films?",
    answer: "Field trials in the Knoxville region showed no significant difference in pie pumpkin yields when comparing PE mulch and BDM treatments (Ghimire et al., 2018).",
    open: false
  },
  {
    question: "Does Carbon Nurture BDM require tillage at the end of the season?",
    answer: "Yes, we recommend tilling any remaining product at the beginning of the following season. Exposure to UV and environmental elements will accelerate the biodegradation process.",
    open: false
  },
  {
    question: "When does the mulch film start breaking down?",
    answer: "Our films typically begin biodegrading within 4-6 months, depending on the variety purchased and your climate zone.",
    open: false
  },
  {
    question: "What are the benefits of Carbon Nurture mulch compared to other biodegradable or paper mulch films?",
    answer: "Many biodegradable mulch films lack the durability needed to last an entire season and are prone to tearing during installation due to their limited flexibility. Carbon Nurture mulch is designed to provide season-long performance with superior strength and stretchability.",
    open: false
  },
  {
    question: "Can Carbon Nurture BDM be stored for next season?",
    answer: "Yes! Unlike similar BDM products, ours is shelf-stable. Store it in a dry area away from sunlight, preferably in its original packaging. If stored properly, it will perform just as well in future seasons.",
    open: false
  },
  {
    question: "Will Carbon Nurture BDM leave microplastics in the soil?",
    answer: "No. Once fully biodegraded, our product leaves no microplastics. It breaks down into a consumable wax that is absorbed by microorganisms, converting into organic carbon and trace minerals that enhance soil health.",
    open: false
  },
  {
    question: "Does the film stick to crops as it degrades?",
    answer: "No, our mulch film is specially designed to avoid clinging to crops such as pumpkins, melons, and squash. This prevents yield loss, unlike other films that may adhere to plants.",
    open: false
  },
  {
    question: "What is the best way to irrigate crops when using this film?",
    answer: "Since our film is impermeable for effective weed suppression, we recommend installing a drip irrigation system underneath it during mulch layer installation.",
    open: false
  },
  {
    question: "Is this film toxic to plants or soil as it degrades?",
    answer: "No. Our product has passed toxicity tests for soil, water, and earthworms, showing no negative effects. Instead, it increases organic carbon, enhances microbial activity, and deposits beneficial trace minerals to help plants thrive.",
    open: false
  },
  {
    question: "Will this film tear easily or break down faster because it is less than 1 mil thick?",
    answer: "No, our product has been rigorously field-tested and is highly durable compared to other biodegradable mulch options. We believe it is the best alternative to conventional plastic mulches available today.",
    open: false
  },
  {
    question: "Location of Carbon Nurture?",
    answer: "We are proud to say we are a USA based company, sourcing our high quality materials for our films in The USA as well! We hold high regards for environmental safety and creating a cleaner and more environmentally friendly products that help reduce waste on a large scale and sequester carbon in the process. We test all of our products to ensure they are free of heavy metals to keep your fields free of them!",
    open: false
  }
]);

// Функция для открытия/закрытия вопроса
const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<template>
  <div class="container py-5">
    <h1 class="text-center text-dark fw-bold mb-4">Frequently Asked Questions</h1>

    <div class="accordion" id="faqAccordion">
      <div v-for="(faq, index) in faqs" :key="index" class="accordion-item border-0">
        <!-- Вопрос -->
        <h2 class="accordion-header">
          <button 
            class="accordion-button shadow-none text-white fw-bold" 
            :class="{ 'collapsed': !faq.open }"
            type="button" 
            @click="toggleFAQ(index)"
            :aria-expanded="faq.open ? 'true' : 'false'"
            :aria-controls="'faq' + index"
            style="background-color: #107a1d;">
            {{ faq.question }}
          </button>
        </h2>
        <!-- Ответ -->
        <div 
          :id="'faq' + index" 
          class="accordion-collapse collapse"
          :class="{ 'show': faq.open }"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body text-secondary">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-button:focus {
  box-shadow: none !important; /* Убираем контур фокуса */
}

.accordion-body {
  color: #000 !important; /* Делаем текст ответов черным */
}
</style>
