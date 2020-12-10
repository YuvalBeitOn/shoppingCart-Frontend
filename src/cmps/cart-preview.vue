<template>
  <li v-if="product" class="cart-preview flex ">
      <div class="img-container">

    <img
      class="prod-img"
      :src="`https://picsum.photos/200/200?random=${product.imgUrl}`"
      alt="product-Img"
    />
      </div>
      <div class="content-container flex column">

    <h3>{{ product.name }}</h3>
    <h4 class="prod-price">{{product.price}}$</h4>
    <h4>count:{{product.count}}</h4>
      </div>
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