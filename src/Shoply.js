import React, { useReducer } from "react";
import Item from "./Item";
import initialProducts from "./data.json";
import rootReducer from "./rootReducer"
import DispatchContext from "./DispatchContext";

const initialState = {
  products: initialProducts.products,
  cart: {},
};

function Shoply() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  console.log(initialProducts);
  const showProducts = Object.keys(state.products).map(key => {
    let product = {...state.products[key]};
    console.log("product:",product);
    // Product: {"name": "tv", "price", "description", "image_url"}
    return <Item product={product} key={key} id={key} />;
  });

  const showCart = Object.keys(state.cart).map(key => {
    let product = {...state.products[key]};
    console.log("product:",product);
    // Product: {"name": "tv", "price", "description", "image_url"}
    return <Item product={product} key={key} id={key}/>;
  });

  return (
    <div className="Shoply">
      <DispatchContext.Provider value={dispatch}>
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
      </DispatchContext.Provider>
    </div>
  );
}

export default Shoply;
