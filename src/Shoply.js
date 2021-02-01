import React, { useReducer } from "react";

import initialProducts from "./data.json";

const initialState = {
  initialProducts,
  cart: {},
};

function reducer(state, action) {
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
  }
  return state;
}

function Shoply() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showProducts = Object.keys(state.products).map(key => {
    let product = state.products[key];
    return <Product product={product} key={key}/>;
  });

  const showCart = Object.keys(state.cart).map(key => {
    let product = state.products[key];
    <Product product={product} key={key}/>;
  });

  return (
    <div className="Shoply">
      <div>
        <ul>
          {showProducts}
        </ul>
      </div>
      <div>
        <ul>
          {showCart}
        </ul>
      </div>
    </div>
  );
}

export default Shoply; 