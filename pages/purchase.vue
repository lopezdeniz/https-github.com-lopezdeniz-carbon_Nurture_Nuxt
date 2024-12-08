<template>
    <section id="purchase" class="container py-5">
      <h1 class="text-center mb-4">Purchase Your Plan</h1>
      <p class="text-center mb-5">
        Choose the perfect plan for your needs and start your journey with Carbon Nurture today.
      </p>
  
      <div class="row align-items-center">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="col-md-4 mb-4"
          style="transition: transform 0.3s ease;"
        >
          <div class="card h-100 shadow-sm">
            <img
              :src="plan.image"
              class="card-img-top"
              :alt="plan.title"
            />
            <div class="card-body text-center">
              <h5 class="card-title">{{ plan.title }}</h5>
              <p class="card-text">{{ plan.description }}</p>
              <p class="text-primary font-weight-bold">{{ plan.price }}</p>
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "PurchasePage",
    data() {
      return {
        plans: [
          {
            title: "Basic Plan",
            description: "Perfect for small farms or personal projects.",
            price: "$50",
            image: "https://via.placeholder.com/300x200?text=Basic+Plan",
          },
          {
            title: "Standard Plan",
            description: "Ideal for medium-sized farms looking for efficiency.",
            price: "$100",
            image: "https://via.placeholder.com/300x200?text=Standard+Plan",
          },
          {
            title: "Premium Plan",
            description: "Perfect for large-scale agricultural operations.",
            price: "$150",
            image: "https://via.placeholder.com/300x200?text=Premium+Plan",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  #purchase {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .card {
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  .btn-primary {
    background-color: #007bff;
    border: none;
    font-weight: bold;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  