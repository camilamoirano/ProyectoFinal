import React, {useContext} from "react";
import "../Products/item.css";
import ItemCount from "../ItemCount";
import "../Products/ItemListContainer.css"
import {cartContext} from "../../context/cartContext"

function ItemDetail ({item}) {

  const { addItem } = useContext(cartContext);

  function handleAddToCart(count){
    addItem(item, count)
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={item.img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{item.title}</h3>
        <p>{item.category}</p>
        <h4>$ {item.price}</h4>
      </div>
      <div className="botones">
      <ItemCount initial={1} onAddToCart={handleAddToCart} stock={item.stock} />
      </div>
      
    </div>
  );
}

export default ItemDetail;