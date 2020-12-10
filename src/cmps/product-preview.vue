<template>
  <li class="product-preview" @click="goToDetails">
    <img
      class="prod-img"
      :src="`https://picsum.photos/200/300?random=${product.imgUrl}`"
      alt="product-Img"
    />
    <div class="prod-price">Price: {{ product.price }}$</div>
    <div class="prod-name">{{ product.name }}</div>
    <button class="add-btn" @click.stop="addToCart(product)">
      Add to cart
    </button>
  </li>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  created() {},
  methods: {
    addToCart(product) {
      console.log('product:', product)
      this.$store.commit({ type: 'addProduct', product })
      this.$message({
        message: 'Your product added to the bag.',
        type: 'success',
      })
    },
    goToDetails() {
      this.$router.push(`/product/${this.product._id}`)
    },
  },
}
</script>

<style></style>
