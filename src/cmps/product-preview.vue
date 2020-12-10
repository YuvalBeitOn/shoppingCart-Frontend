<template>
  <li class="product-preview" @click="goToDetails">
    <img
      class="prod-img"
      :src="`https://picsum.photos/200/300?random=${product.imgUrl}`"
      alt="product-Img"
    />
    <div class="prod-price">Price: {{ product.price }}$</div>
    <div class="prod-name">{{ product.name }}</div>
    <button class="add-btn" @click="addToCart(product._id)">Add to cart</button>
  </li>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  created() {
    this.productCopy = this.product;
  },
  methods: {
    addToCart(productId) {
      this.$store.commit("addProduct", this.productCopy);
    },
    goToDetails() {
       this.$router.push(`/product/${this.product._id}`)
    }
  },
};
</script>

<style></style>
