import { productService } from '@/services/product.service.js';

export const productStore = {
  state: {
    products: null,
    cartProducts: [],
  },
  getters: {
    products(state) {
      return state.products;
    },
    cart(state) {
      return state.cartProducts;
    },
  },
  mutations: {
    setProducts(state, { products }) {
      state.products = products;
      console.log('state.products:', state.products)
    },
    deleteProduct(state, { productId }) {
      const idx = state.cartProducts.findIndex(
        (product) => product._id === productId
      );
      state.cartProducts.splice(idx, 1);
    },
    addProduct(state, { product }) {
      state.cartProducts.unshift(product);
    },
    editProduct(state, { product }) {
      const idx = state.products.findIndex(
        (currProduct) => product._id === currProduct._id
      );
      state.products.splice(idx, 1, product);
    },
  },
  actions: {
    async loadProducts({ commit }) {
      const products = await productService.query();
      commit({ type: 'setProducts', products });
      return products;
    },
    async deleteProduct({ commit }, { productId }) {
      const removedProduct = await productService.remove(productId);
      commit({ type: 'deleteProduct', productId: productId });
      return removedProduct;
    },
    async editProduct({ commit }, { product }) {
      console.log('Product from edit store:', product);
      const savedProduct = await productService.save(product);
      commit({ type: 'editProduct', Product: savedProduct });
      return savedProduct;
    },
    async addProduct({ commit }, { product }) {
      const savedProduct = await productService.save(product);
      commit({ type: 'addProduct', product: savedProduct });
      return savedProduct;
    },
  },
};
