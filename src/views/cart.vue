<template>
  <section class="main-cart">
   <div class="cart-container flex wrap align-center">
     <div class="bag flex column">
       <h3>MY BAG</h3>
       <hr />
       
       <cart-list v-if="cartProducts" :cartProducts="cartProducts" />
     </div>
     <div class="total flex column">
       <h3>TOTAL</h3>
       <hr />
       <div class="subtotal-container flex space-between">
    <h4>Sub-total</h4>
    <span>{{cartTotal}}</span>
    </div>
       <hr />
  <button class="btn-checkout">Chackout</button>
     </div>
   </div>
  </section>
</template>

<script>
import cartList from '@/cmps/cart-list'
export default {
  name:'cart',
components:{
  cartList
},
computed:{
  cartProducts(){
   console.log('this.$store.getters.cartProducts:', this.$store.getters.cartProducts)
   return this.$store.getters.cartProducts
},
  cartTotal(){
    const cartTotal = this.$store.getters.cartTotal
    return cartTotal ? cartTotal : 'not have'
  }

}

}
</script>

<style>

</style>