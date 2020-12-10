<template>
  <section class="app-header-container">
    <section class="app-header flex space-between align-center">
      <router-link to="/"><h1>Miss Shop</h1></router-link>
      <nav class="nav-menu">
        <router-link to="/">Shop</router-link>
        <router-link to="/cart"
          ><i class="fas fa-shopping-cart"></i> {{ cartLength }}</router-link
        >
      </nav>
    </section>
    <img class="main-img" src="@/assets/img/shopping.png" alt="" />
    <div class="product-control flex align-center space-between">
      <div class="title-container flex align-center">
        <span class="left-border"></span>
        <h2 class="product-title">Our Products</h2>
      </div>
      <router-link to="/cart"
        ><span class="my-cart flex"
          >My Cart ({{ cartLength }} items)</span
        ></router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    cartLength() {
      return this.$store.getters.cartLength
    },
  },
}
</script>
