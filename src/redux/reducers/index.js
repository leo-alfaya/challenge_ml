import {
  SET_PRODUCTS,
  SET_PRODUCT_QUERY,
  SET_ACTIVE_PRODUCT_DETAIL,
  SET_ACTIVE_PRODUCT_DESCRIPTION
} from "../constants/action-types";
import {
  prepareProducts,
  prepareActiveProductDetails,
} from "../../helpers/products";

const initialState = {
  products: {
    list: [],
    query: "",
    active: {},
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return Object.assign({}, state, {
        products: {
          ...state.products,
          list: prepareProducts(action.payload),
        },
      });
    case SET_PRODUCT_QUERY:
      return Object.assign({}, state, {
        products: {
          ...state.products,
          query: action.payload,
        },
      });
    case SET_ACTIVE_PRODUCT_DETAIL:
      return Object.assign({}, state, {
        products: {
          ...state.products,
          active: {
            ...state.products.active,
            ...prepareActiveProductDetails(action.payload),
          },
        },
      });
    case SET_ACTIVE_PRODUCT_DESCRIPTION:
      return Object.assign({}, state, {
        products: {
          ...state.products,
          active: {
            ...state.products.active,
            description: action.payload,
          },
        },
      });
  }

  return state;
}

export default rootReducer;
