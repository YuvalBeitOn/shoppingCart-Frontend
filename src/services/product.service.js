import httpService from './http.service'

export const productService = {
  query
}

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/product'
    : '//localhost:3030/api/product'

async function query() {
  return httpService.get('product/')
}
