<template>
  <div id="app">
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
    this.productsthis.$store.dispatch({
      type: "loadProducts",
    });
  },
};
</script>
