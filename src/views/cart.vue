<template>
  <section v-if="!cartProducts.length" class="main-cart">
    <div class="cart-container flex wrap justify-center align-center">
      <div class="bag-container flex column">
        <h3 class="mb-5">MY BAG</h3>
        <hr />

        <cart-list v-if="cartProducts" :cartProducts="cartProducts" />
      </div>
      <div class="total-container flex column">
        <h3 class="mb-5">TOTAL</h3>
        <hr />
        <div class="subtotal-container flex space-between">
          <h4 class="mb-5">Sub-total</h4>
          <span>{{ cartTotal }}</span>
        </div>
        <hr />
        <button @click="chackout" class="btn-checkout">Chackout</button>
      </div>
    </div>
  </section>
  <div v-else class="flex justify-center align-center">
    <h1>
      You Dont Have a product in your bag, go to shop and starting to buy!!
    </h1>
  </div>
</template>

<script>
import cartList from '@/cmps/cart-list'
export default {
  name: 'cart',
  components: {
    cartList,
  },
  computed: {
    cartProducts() {
      console.log(
        'this.$store.getters.cartProducts:',
        this.$store.getters.cartProducts
      )
      return this.$store.getters.cartProducts
    },
    cartTotal() {
      const cartTotal = this.$store.getters.cartTotal
      return cartTotal ? cartTotal : 'not have'
    },
  },
  methods: {
    chackout() {
      this.$store.commit({ type: 'checkout' })
    },
  },
}
</script>

<style>
</style>