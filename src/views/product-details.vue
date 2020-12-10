<template>
  <section class="product-details">
    lalalala
    <!-- <div class="img-container ratio-square img-detail">
      <img class="product-img" :src="imgSrc" alt="" />
    </div>
    <div class="prod-price">Price: {{ product.price }}$</div>
    <div class="prod-name">{{ product.name }}</div>
    <button class="goback-btn" @click="goBack">Go Back</button> -->
  </section>
</template>

<script>
import { productService } from "../services/product.service";
export default {
  data() {
    return {
      product: null,
    };
  },
  computed: {
    imgSrc() {
      return `https://picsum.photos/200/300?random=${product.imgUrl}`;
    },
  },
  methods: {
    goBack() {
      this.$router.push(`/`);
    },
  },
  created() {
    const productId = this.$route.params.id;
    const product = this.$store.commit({type: 'getProductById', productId})
    console.log(product);
  },
};
</script>
