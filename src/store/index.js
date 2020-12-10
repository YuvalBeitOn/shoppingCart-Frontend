import { productService } from "../services/product.service.js";

export const productStore = {
    strict: true,
    state: {
        products: []
    },
    getters: {
        products(state) {
            return state.products;
        }
    },
    mutations: {
        setProducts(state, { products }) {
            state.products = products
        },
        deleteProduct(state, { productId }) {
            const idx = state.products.findIndex(product => product._id === productId)
            state.products.splice(idx, 1);
        },
        addProduct(state, { product }) {
            state.products.unshift(product);
        },
        editProduct(state, { product }) {
            const idx = state.products.findIndex(currProduct => product._id === currProduct._id)
            state.products.splice(idx, 1, product);
        },
    },
    actions: {
        async loadProducts({ getters, commit }) {
            const products = await productService.query()
            commit({ type: 'setProducts', products })
            return products
        },
        async deleteProduct({ commit }, { productId }) {
            const removedProduct = await productService.remove(productId)
            commit({ type: 'deleteProduct', productId: productId })
            return removedProduct
        },
        async editProduct({ commit }, { product }) {
            console.log('Product from edit store:', product);
            const savedProduct = await productService.save(product)
            commit({ type: 'editProduct', Product: savedProduct })
            return savedProduct
        },
        async addProduct({ commit }, { product }) {
            const savedProduct = await productService.save(product)
            commit({ type: 'addProduct', product: savedProduct })
            return savedProduct

        }
    },
}