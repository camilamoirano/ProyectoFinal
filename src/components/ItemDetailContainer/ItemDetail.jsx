import React from "react";
import "../Products/item.css";
import ItemCount from "../ItemCount";
import Button from "../Button/Button";
import "../Products/ItemListContainer.css"

function ItemDetail (props) {
  let { price, title, img, category, stock } = props;

  let estadoCart = false;

  function handleAddToCart(){
    alert("El producto ha sido agregado con éxito");
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>{category}</p>
        <h4>$ {price}</h4>
      </div>
      <div className="botones">
        { estadoCart === false? <ItemCount initial={1} onAddToCart={handleAddToCart} stock={stock} /> : <Button>Finalizar Compra</Button>}
      </div>
      
    </div>
  );
}

export default ItemDetail;