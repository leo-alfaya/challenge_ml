import {
  SET_PRODUCTS,
  SET_PRODUCT_QUERY,
  SET_ACTIVE_PRODUCT,
  CLEAR_PRODUCTS,
  CLEAR_ACTIVE_PRODUCT,
} from "../constants/action-types";

export function clearProducts() {
  return { type: CLEAR_PRODUCTS };
}

export function clearActiveProduct() {
  return { type: CLEAR_ACTIVE_PRODUCT };
}

export function setProducts(payload) {
  return { type: SET_PRODUCTS, payload };
}


export function setProductQuery(payload) {
  return { type: SET_PRODUCT_QUERY, payload };
}

export function setActiveProduct(payload) {
  return { type: SET_ACTIVE_PRODUCT, payload };
}
