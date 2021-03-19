import {
  SET_PRODUCTS,
  SET_PRODUCT_QUERY,
  SET_ACTIVE_PRODUCT,
  CLEAR_PRODUCTS,
} from "../constants/action-types";

const initialState = {
  products: {
    list: { categories: [], items: [] },
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
          list: action.payload,
        },
      });
    case SET_PRODUCT_QUERY:
      return Object.assign({}, state, {
        products: {
          ...state.products,
          query: action.payload,
        },
      });
    case SET_ACTIVE_PRODUCT:
      return Object.assign({}, state, {
        products: {
          ...state.products,
          active: {
            ...action.payload,
          },
        },
      });
    case CLEAR_PRODUCTS:
      return Object.assign({}, state, {
        products: {
          ...state.products,
          list: initialState.products.list,
        },
      });
    default:
      return state;
  }
}

export default rootReducer;
