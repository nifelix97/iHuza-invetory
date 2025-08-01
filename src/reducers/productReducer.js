export const PRODUCT_ACTIONS = {
  SET_FIELD: 'set-field',
  RESET_FORM: 'reset-form',
  SET_ERRORS: 'set-errors'
}

export const initialProductState = {
  productTitle: '',
  productName: '',
  createdAt: '',
  stock: '',
  productImage: '',
  stockquantity: '',
  errors: {}
}

const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.SET_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        errors: {
          ...state.errors,
          [action.payload.name]: ''
        }
      }
    
    case PRODUCT_ACTIONS.RESET_FORM:
      return initialProductState
    
    case PRODUCT_ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    
    default:
      return state
  }
}

export default productReducer