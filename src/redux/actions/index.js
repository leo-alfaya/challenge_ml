import { SET_PRODUCTS, SET_PRODUCT_QUERY, SET_ACTIVE_PRODUCT_DETAIL, SET_ACTIVE_PRODUCT_DESCRIPTION } from '../constants/action-types'

export function setProducts(payload) {
  return { type: SET_PRODUCTS, payload}
} 

export function setProductQuery(payload) {
  return { type: SET_PRODUCT_QUERY, payload}
}

export function setActiveProductDetail(payload) {
  return { type: SET_ACTIVE_PRODUCT_DETAIL, payload}
}

export function setActiveProductDescription(payload) {
  return { type: SET_ACTIVE_PRODUCT_DESCRIPTION, payload}
} 