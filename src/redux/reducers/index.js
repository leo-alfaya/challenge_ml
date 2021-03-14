import { SET_PRODUCTS, SET_PRODUCT_QUERY } from "../constants/action-types";

const initialState = {
  products: {
    list: [],
    query: "",
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
  }

  return state;
}

export default rootReducer;
