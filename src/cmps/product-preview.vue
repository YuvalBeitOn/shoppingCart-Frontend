<template>
  <li><pre>{{product}}</pre></li>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  created() {
    this.productCopy = this.product;
  },
};
</script>

<style></style>
