import { SET_PRODUCTS, SET_PRODUCT_QUERY, SET_ACTIVE_PRODUCT } from '../constants/action-types'

export function setProducts(payload) {
  return { type: SET_PRODUCTS, payload}
} 

export function setProductQuery(payload) {
  return { type: SET_PRODUCT_QUERY, payload}
}

export function setActiveProduct(payload) {
  return { type: SET_ACTIVE_PRODUCT, payload}
}