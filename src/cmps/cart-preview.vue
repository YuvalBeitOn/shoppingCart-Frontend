<template>
  <li v-if="product" class="cart-preview flex column">
    <img
      class="prod-img"
      :src="`https://picsum.photos/200/200?random=${product.imgUrl}`"
      alt="product-Img"
    />
    <h1>name:{{ product.name }}</h1>
    <h4 class="prod-price">price:{{product.price}}</h4>
    <h4>count:{{product.count}}</h4>
  </li>
</template>

<script>
export default {
  name: "cart-preview",
  props: {
    product: Object,
  },
  computed: {},
};
</script>

<style>
</style>