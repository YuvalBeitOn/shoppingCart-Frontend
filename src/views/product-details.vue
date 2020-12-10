<template>
  <section class="product-details flex space-around" v-if="product">
    <img class="product-img" :src="imgSrc" alt="" />
    <div class="prod-details flex column space-between">
      <div class="prod-name">{{ product.name }}</div>
      <div class="prod-price">Price: {{ product.price }}$</div>
      <p class="prod-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        finibus venenatis arcu, id rutrum tellus fermentum id. Proin blandit
        viverra lectus, ut pellentesque dolor aliquet eget. Maecenas libero
        neque, consequat a blandit eget, semper a turpis. Etiam dignissim leo
        risus, id molestie tellus sollicitudin vitae.
      </p>
      <button class="goback-btn" @click="goBack">Go Back</button>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    imgSrc() {
      return `https://picsum.photos/200/300?random=${this.product.imgUrl}`;
    },
    product() {
      console.log(this.$store.getters.currProduct);
      return this.$store.getters.currProduct;
    },
  },
  methods: {
    goBack() {
      this.$router.push(`/`);
    },
  },
  created() {
    const productId = this.$route.params.productId;
    console.log("productId:", productId);
    this.$store.commit({ type: "getProductById", productId });
    console.log(product);
  },
};
</script>
