<template>
  <li class="cart-preview flex column">
          <!-- <img
      class="prod-img"
      :src="`https://picsum.photos/200/300?random=${product.imgUrl}`"
      alt="product-Img"
    /> -->
    <h1>{{product}}</h1>
      <!-- <h2>{{product.price}}</h2> -->
  </li>
</template>

<script>
export default {
props:{
    product:Object
},
computed:{

}
}
</script>

<style>

</style>