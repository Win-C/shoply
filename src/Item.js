import { useContext } from "react";
import DispatchContext from "./DispatchContext";

/* Item component
 * Props:
 *  - Product: {"name",  "price", "description", "image_url"}
 * State: none
 */
function Item({name, price, description, image_url, id}){
  const dispatch = useContext(DispatchContext);
  console.log("ITEM ===>",{name, price, description, image_url, id})
  function add(){
    dispatch({type:"add",
              product:{id:{name, price, description, image_url}}
            });
  }
  function remove(){
    dispatch({type:"remove",
              product:{id:{name, price, description, image_url}} });
  }
  return (
    <li>
      <div>
        <p>{name} ${price}</p>
        <img alt={name} src={image_url}/>
        <p>{description}</p>
      </div>
      <div>
        <button onClick={add}>Add to Cart</button>
        <button onClick={remove}>Remove from Cart</button>
      </div>
    </li>);
}

export default Item;
