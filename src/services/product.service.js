import httpService from './http.service'

export const productService = {
    query,
    getById,
    // remove,
    // save,
    // getEmpty
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/product' : '//localhost:3030/api/product';

async function query() {
    return httpService.get('product/')
}


async function getById(id) {
    return httpService.get(`product/${id}`)
}


// async function remove(id) {
//     return httpService.delete(`product/${id}`)
// }

// function save(product) {
//     const savedProduct = (product._id) ? _update(product) : _add(product)
//     return savedProduct;
// }

// async function _add(product) {
//     return httpService.post(`product/`, product)
// }

// async function _update(product) {
//     return httpService.put(`product/${product._id}`, product)
// }

// function getEmpty() {
//     return {
//         name: '',
//         price: 0,
//         type: '',
//         inStock: false
//     }
// }