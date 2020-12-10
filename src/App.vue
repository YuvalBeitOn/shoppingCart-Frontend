<template>
  <div class="shop-app container">
    <main class="main-container">
      <app-header />
      <router-view />
    </main>
  </div>
</template>

<script>
import appHeader from "./cmps/app-header";
export default {
  components: {
    appHeader,
  },
   created() {
    this.$store.dispatch({
      type: "loadProducts",
    });
  },
};
</script>

<style>
.shop-app {
  margin: 0 auto;
}
</style>