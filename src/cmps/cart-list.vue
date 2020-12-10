<template>
  <ul v-if="cartProducts" class="clean-list cart-list">
    <cart-preview
      v-for="product in cartProducts"
      :key="product._id"
      :product="product"
    />
  </ul>
</template>

<script>
import cartPreview from "./cart-preview";
export default {
  name: "cart-list",
  props: {
    cartProducts: Object,
  },
  components: { cartPreview },
};
</script>

<style>
</style>