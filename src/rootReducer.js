
/* Root Reducer function */
function rootReducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        cart: [
          ...state.cart, { ...action.product }
        ]
      };
    case 'remove':
      return {
        ...state,
        cart: state.cart.filter(p => p.id !== action.id)
      };
    default:
        // do nothing
  }
  return state;
}

export default rootReducer;
