<template>
  <section class="app-header flex space-between">
    <router-link to="/"><h1>Miss Shop</h1></router-link>
    <nav class="nav-menu">
      <router-link to="/">Shop</router-link>
      <router-link to="/cart"><i class="fas fa-shopping-cart"></i>({{cartLength}})</router-link>
    </nav>
  </section>
</template>

<script>
export default {
  computed:{
    cartLength(){
      return this.$store.getters.cartProducts.length
    }
  }
};
</script>
