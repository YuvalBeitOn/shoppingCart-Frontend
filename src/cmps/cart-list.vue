<template>
  <ul class="clean-list cart-list">
<cart-preview v-for="product in cartProducts" :key="product._id" :product="product" />
  </ul>
</template>

<script>
import cartPreview from './cart-preview'
export default {
props:{
    cartProducts:Array
},
components:{cartPreview}
}
</script>

<style>

</style>