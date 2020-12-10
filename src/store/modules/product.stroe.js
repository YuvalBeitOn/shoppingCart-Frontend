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
    cartProducts(state) {
      const cartProducts = state.cartProducts;
      const cartProductsMap = cartProducts.reduce((acc,prod)=>{
        if(!acc[prod._id]) {
          acc[prod._id] = {...prod,count:0}
        }
        acc[prod._id].count++
        acc[prod._id].price*=acc[prod._id].count
        return acc
      },{})
      console.log('obj map',cartProductsMap);
      return cartProductsMap
      
    },
    cartLength(state){
    return state.cartProducts.length
    },
    cartTotal(state){
      const cartProducts = state.cartProducts
      const sumProducts = cartProducts.reduce((acc,prod)=>{
        acc += prod.price
        return acc
      },0)
      console.log('sumProducts:', sumProducts)
      return sumProducts
    }
  },
  mutations: {
    checkout(state){
      state.cartProducts = []
    },
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
      console.log('product:', product)
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
