import { SET_PRODUCTS } from '../constants/action-types'

const initialState = {
  products: []
}

function rootReducer(state = initialState, action) {
  if(action.type === SET_PRODUCTS) {
    return Object.assign({}, state, {
      products: action.payload
    })
  }

  return state
}

export default rootReducer