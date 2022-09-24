import React from "react";
import Button from "../Button/Button";
import "../Products/item.css";
import ItemCount from "../ItemCount";

function Card(props) {
  let { price, title, img, category, stock } = props;

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
      <ItemCount initial={1} stock={stock}/>
      <Button>Agregar al carrito</Button>
    </div>
  );
}

export default Card;
