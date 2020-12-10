<template>
  <section class="shop-app"><product-list :products="products" /></section>
</template>

<script>
import productList from '../cmps/product-list'
export default {
  components: {
    productList,
  },
  computed: {
    products() {
      return this.$store.getters.products
    },
  },
}
</script>
