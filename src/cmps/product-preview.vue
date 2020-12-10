<template>
  <li class="product-preview">
    <img
      class="prod-img"
      :src="`https://picsum.photos/200/300?random=${product.imgUrl}`"
      alt="product-Img"
    />
    <div class="prod-price">Price: {{ product.price }}$</div>
    <div class="prod-name">{{ product.name }}</div>
    <button class="add-btn" @click="addToCart(product)">Add to cart</button>
  </li>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  created() {
  },
  methods: {
    addToCart(product) {
      console.log('product:', product)
      this.$store.commit({type:"addProduct", product});
    },
  },
};
</script>

<style></style>
