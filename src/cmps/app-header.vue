<template>
  <section class="app-header-container">
    <section class="app-header flex space-between align-center">
      <router-link to="/"><h1>Miss Shop</h1></router-link>
      <nav class="nav-menu">
        <router-link to="/">Shop</router-link>
        <router-link to="/cart"
          ><i class="fas fa-shopping-cart"></i
        ></router-link>
      </nav>
    </section>
    <img src="@/assets/img/shopping.png" alt="" />
    <div>
      <h2>Our Products</h2>
      <span>My Cart</span>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    // cartItems() {
    //   return this.$store.getters.cart.
    // }
  }
};
</script>
