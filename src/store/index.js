import Vue from 'vue';
import Vuex from 'vuex';
import { productStore } from './modules/product.stroe';
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    productStore,
  },
});
