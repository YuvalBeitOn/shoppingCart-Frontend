<template>
  <ul class="product-list clean-list flex wrap align-center justify-center">
    <product-preview
      v-for="product in products"
      :key="product._id"
      :product="product"
    />
  </ul>
</template>

<script>
import productPreview from './product-preview.vue'
export default {
  components: { productPreview },
  props: {
    products: Array,
  },
  data() {
    return {
      productsCopy: null,
    }
  },
  created() {
    this.productsCopy = this.products
  },
}
</script>

<style></style>
