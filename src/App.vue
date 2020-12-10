<template>
  <div class="shop-app container">
    <main class="main-container">
      <app-header />
      <router-view />
      <app-footer />
    </main>
  </div>
</template>

<script>
import appFooter from "./cmps/app-footer";
import appHeader from "./cmps/app-header";
export default {
  components: {
    appHeader,
    appFooter
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
